import { graphql} from 'gatsby';
import React from 'react'
import Layout from '../components/Layout';
import Img from 'gatsby-image'
import { motion } from 'framer-motion';
import Header from '../components/Header';

const ProjectsTemplate = ({data}) => {
    const {html} = data.markdownRemark
    const {title, relative,  featuredImg} = data.markdownRemark.frontmatter
    return (
      <Layout>
        <div className = "page">
            <div className = "page__wrapper">
            <Header h2 = {title} p = {"Project was created for course Easy-Code"} />
            <div className = "template">
              <div 
            className = "template__image">
            <Img fluid = {featuredImg.childImageSharp.fluid} />
            </div>
            <div className = "template__button">
              <a href = {relative}
              target = "_blank">
                <motion.button
              animate = {{scale: [1.05, 1, 1.05]}}
              transition = {{repeat: Infinity}}
              className = "button__template">Check it!</motion.button>
              </a>
              
            </div>
            
            <div
            className = "template__description"
            dangerouslySetInnerHTML = {{ __html: html}} />
            </div>
            </div>
            
            
            </div> 
      </Layout>
            
      
    )
}

export default ProjectsTemplate; 

export const query = graphql`
query ProjectsTemplate($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        icons
        title
        relative
        featuredImg {
          childImageSharp {
            fluid {
                ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
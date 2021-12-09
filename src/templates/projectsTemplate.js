import { graphql } from 'gatsby';
import React from 'react'
import Layout from '../components/Layout';
import Img from 'gatsby-image'
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import Header from '../components/Header';

const ProjectsTemplate = ({data}) => {
    const {html} = data.markdownRemark
    const {title,icons,  featuredImg} = data.markdownRemark.frontmatter
    return (
      <Layout>
        <div className = "page">
            <div className = "page__wrapper">
            <Header h2 = {title} p = {"Projekt stworzony podczas realizowania kursu Easy-Code"} />
            <div className = "template">
              <div 
            className = "template__image">
            <Img fluid = {featuredImg.childImageSharp.fluid} />
            </div>
            <div className = "template__button">
              <motion.button
              animate = {{scale: [1.2, 1, 1.2]}}
              transition = {{repeat: Infinity}}
              className = "button__template">Wejdź i sprawdź</motion.button>
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
import { graphql } from 'gatsby';
import React from 'react'
import Layout from '../components/Layout';
import Img from 'gatsby-image'
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const ProjectsTemplate = ({data}) => {
    const {html} = data.markdownRemark
    const {title,icons,  featuredImg} = data.markdownRemark.frontmatter
    return (
            <div className = "template">
            <div className = "template__wrapper">
                    <h2>{title}</h2>
            <h3>Gatsby project</h3>
            <div 
            className = "template__image">
            <Img fluid = {featuredImg.childImageSharp.fluid} />
            </div>
            
            
            <div className = 'template__text' dangerouslySetInnerHTML = {{ __html: html}} />
            </div>
            
            </div> 
      
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
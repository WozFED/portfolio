import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { motion } from 'framer-motion'

const Projects = () => {
    const data = useStaticQuery(graphql`
    query ProjectsPage {
        allMarkdownRemark {
          nodes {
            frontmatter {
              slug
              title
              relative
              icons
              short
              featuredImg {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            id
          }
        }
      }
    `)

    const { nodes } = data.allMarkdownRemark
    return (
        <div className="projects">
        <div className="projects__wrapper">
            
            <h2>My projects</h2>
            <div className = "projects__container">
            {nodes.map((el, index) => {
            return (
              <Link to = {`${el.frontmatter.slug}`}>
                <motion.div className = "projects__box"
                whileHover = {{scale: 1.05}}>
                <h2>Projekt {index+1}</h2>
                <div className = "projects__image">
                           <Img fluid = {el.frontmatter.featuredImg.childImageSharp.fluid} />
                </div>
       
                </motion.div>
              </Link>
            )
          })}

            </div>
          
        </div>
      </div>
    )
}

export default Projects;
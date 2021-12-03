import React, {useState, useEffect} from "react"
import Layout from "../components/Layout"
import { graphql, Link} from "gatsby"
import Img from 'gatsby-image'
import { motion } from "framer-motion"
import styled from "styled-components"



const Projects = ({data}) => {
  
  const projects = data.allMarkdownRemark.nodes
  
  return (
    <Layout>
      <div className = "projects">
         {projects.map(el => {
           return (
            
             <div className = "projects__box">
               <Img fluid = {el.frontmatter.featuredImg.childImageSharp.fluid} />
               <h2>{el.frontmatter.title}</h2>
               <p>OPISPOPSISPOSPISPOSIPOSIPSOIPSOISPOISPOISPSIPOSIPS
               OPISPOPSISPOSPISPOSIPOSIPSOIPSOISPOISPOISPSIPOSIPS
               OPISPOPSISPOSPISPOSIPOSIPSOIPSOISPOISPOISPSIPOSIPS
               OPISPOPSISPOSPISPOSIPOSIPSOIPSOISPOISPOISPSIPOSIPS
               OPISPOPSISPOSPISPOSIPOSIPSOIPSOISPOISPOISPSIPOSIPS
               OPISPOPSISPOSPISPOSIPOSIPSOIPSOISPOISPOISPSIPOSIPS
               </p>
                <p><Link to = {el.frontmatter.relative} target="_blank">Wejdź i sprawdź</Link></p>
              <motion.div 
              style = {{background: `linear-gradient(90deg, transparent 50%, blue 50%)`, backgroundSize: '200% 100%',
              backgroundPosition: '0% 0%'
              }}
              initial = {{backgroundPosition: '0 0'}}
              animate = {{backgroundPosition: ['100% 0', '0% 0%'],
            }}
              transition = {{duration: 2}}
              className = "projects__box-animate">

              </motion.div>
             
             
              </div>
            
           )
         })}
      </div>
    </Layout>
  )
}

export default Projects

export const query = graphql`
query ProjectsPage {
  allMarkdownRemark {
    nodes {
      frontmatter {
        slug
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
      id
    }
  }
}

`

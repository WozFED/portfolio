import React from 'react'
import Layout from '../components/Layout'
import Img from 'gatsby-image';
import { graphql, Link } from 'gatsby';
import { motion } from 'framer-motion';
import TextAnimateLogic from '../components/TextAnimateLogic';

const Projects = ({data}) => {
    const projects = data.allMarkdownRemark.nodes
    console.log(projects)
    return (
        <Layout>
            <div className = "page">
                <div className = "page__wrapper">
                    <div className = "header">
                    <h2><TextAnimateLogic text= {"Projects"} speed = {50} /></h2>
                    <p><TextAnimateLogic text = {"During course i got 3 projects to do, and on this page u can choose one, to check."} speed = {25} /></p>
                    </div>
                    {
                        projects.map((el, id) =>{
                            return (
                               
                                <motion.div
                                initial = {{x: -100}}
                                animate = {{x: 0}}
                                className = "page__container">
                                    <Link to = {`/${el.frontmatter.slug}`}>
                                    <div>

                                    <h3>Projekt #{id+1}</h3>
                                    <p>{el.frontmatter.title}</p>
                                    </div>
                                    
                                    <Img
                                    className = "page__img"
                                    fluid = {el.frontmatter.featuredImg.childImageSharp.fluid} />
                                  </Link></motion.div>
                              
                            )
                        })
                    }
                </div>
            </div>
        </Layout>
    )
}

export default Projects;

export const query = graphql`

    query Projects {
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
    `
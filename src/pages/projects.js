import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header';
import { graphql, Link } from 'gatsby';
import Project from '../components/Project';

const Projects = ({data}) => {
    const projects = data.allMarkdownRemark.nodes
    return (
        <Layout>
            <div className = "page">
                <div className = "page__wrapper">
                  <Header h2 = {"Projects"}
                  p = {"During course i got 3 projects to do, and on this page u can choose one, to check."}
                    />
                  <Project projects = {projects} />
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
import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

const ContactPage = ({data}) => {
    

    return (
        <div className = "header2">
          <div className = "header2__wrapper">
            <div className = "navigation">
            <ul>
              <li>About</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className = "content">
            <div className = "content__wrapper">
              <div className = "content__title">
              <h1>Patryk</h1>
              </div>
              <div className = "content__box">
                <h2>Woźniak</h2>
              </div>
             
              
            </div>
            
          </div>
          </div>

          
        </div>
            
    )
}

export default ContactPage

export const query = graphql`

query Header {
    file(relativePath: {eq: "header.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  
  `
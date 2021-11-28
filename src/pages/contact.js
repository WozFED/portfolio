import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

const ContactPage = ({data}) => {
    

    return (
        <div className = "test">
         
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
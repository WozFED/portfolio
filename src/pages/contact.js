import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

const ContactPage = ({data}) => {
    

    return (
        <Layout>
          <div className = "page ">
            <div className = "page__wrapper contact">
              <div className = "header">
                <h2>Contact me</h2>
                <p>Here many ways to contact with me</p>
              </div>
              <div className = "page__contact">
              
              <p onClick = {() => window.open('mailto:pwozniakgda@gmail.com?subject=Job__offer')}>Adres e-mail: pwozniakgda@gmail.com</p>
              <p>Phone number: 511-500-066</p>
              <p>Facebook: <a href = "https://www.facebook.com/patryk.wozniak.737" target = "_blank" >patryk.wozniak.737</a></p>
              <p>Linkdein: Trzeba założyć</p>
              </div>
             
            </div>
          </div>
        </Layout>
            
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
import React from 'react'
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
                <table className = "table">
                  <tr>
                    <td><p>Adres e-mail:</p></td>
                    <td><p onClick = {() => window.open('mailto:pwozniakgda@gmail.com?subject=Job__offer')}>pwozniakgda@gmail.com</p></td>
                  </tr>
                  <tr>
                    <td><p>Phone number:</p></td>
                    <td><p>511-500-066</p></td>
                  </tr>
                  <tr>
                    <td><p>Facebook:</p></td>
                    <td><p><a href = "https://www.facebook.com/patryk.wozniak.737" target = "_blank" rel="noreferrer" >Click me!</a></p></td>
                  </tr>
                  <tr>
                    <td><p>Linkdein</p></td>
                    <td><p><a href = "https://www.linkedin.com/in/patryk-wo%C5%BAniak-5a5857170/" target = "_blank" rel="noreferrer" >Click me!</a></p></td>
                  </tr>
                </table>
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
import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

const ContactPage = ({data}) => {
    

    return (
        <div className = "test">
                
               <div className = "navigation">
                   <div className = "navigation__options">
                       <ul>
                           <li>Język</li>
                           <li>Motyw</li>
                       </ul>
                   </div>
                   <div className = "navigation__list">
                      <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Skills</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul> 
                   </div>
                    
                </div> 
                <div className = "header">
                    <div className ="header__photo-background">
                        <Img 
                        fluid = {data.file.childImageSharp.fluid} />
                    </div>
                    <div className = "header__title">
                        <div>
                           <h1>Hi, I am Patryk Woźniak</h1>
                            <h2>Web Front End developer who loves object programming</h2>  
                        </div>
                       
                        
                    </div>
                    <div className = "header__section">
                       <div className = "header__photo-me">
                           <div className = "photo">

                           </div>
                       </div>
                        <div className = "header__info">
                            <div>
                               <p> Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
                            Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
                            </p> 
                            </div>
                            <div className = "header__buttons">
                                <button>Kontakt</button>
                                <button>Klasyczne CV</button>
                                <p>FACEBOOK</p>
                                <p>LinkdeIn</p>
                                <p>BitBucket</p>
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
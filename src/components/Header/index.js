import React from 'react'
import { graphql } from "gatsby"
import NavList from '../NavList';
import Navbar from '../Navbar';

const Header = scroll => {
    return (
        <div className="header">
       
        <div className="header__wrapper">
           <div className = "header__photo">
             
            <div className = "photo">

            </div>
            </div>
         
          
            <div className = "header__text">
              <div>
                <h2>Hi there,</h2>
              <p>
              Im passionate with prograaming object and really hope to got a job
              Im passionate with prograaming object and really hope to got a job 
              Im passionate with prograaming object and really hope to got a job
              Im passionate with prograaming object and really hope to got a job
              Im passionate with prograaming object and really hope to got a job
              Im passionate with prograaming object and really hope to got a job</p>
                </div>
               <div className = "header__buttons">
              <button className = "button__general">Kontakt</button>
              <button className = "button__general">Kontakt</button>
            </div>
            <div className = "header__social">
              <div className = "header__media">
                <div> <p>Facebokk</p>
              <p>LinkdeIn</p>
              <p>Bitbucket</p></div>

               
                </div>
             
            </div>
            </div>
            </div>
           
          </div>
          
      
    
    )
    
}

export default Header;
import React, { useState, useEffect, useContext } from "react"
import Layout from "../components/Layout"
import { AnimatePresence, motion } from "framer-motion"
import { graphql } from "gatsby"
import {
  BackDispatchContext,
  BackStateContext,
} from "../context/BackContextProvider"
import Curriculum from "../components/Curriculum"
import TextAnimateLogic from "../components/TextAnimateLogic"
import Delay from "../components/Delay"

const Home = ({ data }) => {
  const [back, setBack] = useState('white')
  
  return (
    <Layout>
     
      <div className="header">
        <div className="header__text">
          <div>
            <div className = "header__header"
            style = {{height: '39px'}}>
            <h1>
              <Delay text={"Patryk Woźniak"} speed={40} delay = {2000} />
            </h1>
            <motion.div
            animate = {{width: [260, 160, 60, 0], left: [0, 60, 160, 260]}}
            transition = {{delay: 3}}
            className = "header__back"></motion.div>

            </div>
            <div className = "header__header"
            style = {{width: '432px', height: '19px'}}
            >

            <p>
              <Delay
                text={"Front End Developer who loves object programming"}
                speed={20}
                delay = {3000}
              />
            </p>
            <motion.div
            style = {{height: '19px', float: 'right'}}
            animate = {{width: [432, 250, 100, 0]}}
            transition = {{delay: 3}}
            className = "header__back">

            </motion.div>
            </div>

            
          </div>
          {/* <div className="header__buttons">
            <button className="button-contact"
            onClick = {() => setBack('white')}>Sprawdź mnie!</button>
          </div> */}
        </div>
        <div className="header__photo">
          <div className="header__picture"></div>
        </div>
      </div>
      <motion.div
        initial={{ bottom: "30px" }}
        animate={{ bottom: "35px" }}
        transition={{ repeat: Infinity }}
        className="scroll"
      >
        <p>Scroll down</p>
        <p>Strzałka w dół</p>
      </motion.div>
    
    </Layout>
  )
}

export default Home

export const query = graphql`
  query {
    allHomeJson {
      nodes {
        name
        text
        site
      }
    }
  }
`

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
import Delay from '../components/Delay'

const Home = ({ data }) => {
  const hi = "Hi"
  const name = "I am Patryk Woźniak"
  const who = "Beginner of Front End Developer"
  const state = useContext(BackStateContext)
  const dispatch = useContext(BackDispatchContext)
  const [disabled, setDisabled] = useState(false)

  useEffect(() => {
    if (state.show === true) {
      setDisabled(true)
      setTimeout(() => {
        setDisabled(false)
      }, 200)
    }
  }, [state.show])

  return (
    <Layout>
      <div className="home">
        <motion.div 
        initial = {{height: "0%", y: 0}}
        animate = {{height: '100%', y: 0}}
        transition = {{duration: 1}}
        className="home__photo">
          <motion.div
          initial = {{opacity:0}}
          animate = {{opacity: 1}}
          transition = {{delay: 0.75}}
          className="home__photo-image"></motion.div>
          </motion.div>
        <div className="home__wrapper">
          <div className="home__content">
            <motion.div
            initial = {{width: 0}}
            animate = {{width: '100%'}}
            transition = {{delay: 0.75, duration: 0.25}}
             className="home__content-text">
               <h2><Delay text = {hi} speed = {40}/></h2>
              <h2><Delay text = {name} speed = {40}/></h2>
              <h2><Delay text = {who} speed = {40}/></h2>
              
            </motion.div>
            <div className="home__bcard">
              <motion.div 
               initial = {{width: 0, height: 0}}
               animate = {{width: '500px', height: "200px"}}
               transition = {{delay: 0.75, duration: 0.25}}
              className="home__card"><Delay text = {"BlaBLABLABLSDBASJDBASUDBAISUBDAISDBJAKSB"}
              speed = {10} /></motion.div>
              <div className="home__buttons">
                <motion.button
                initial = {{opacity: 0}}
                animate = {{opacity: 1}}
                transition = {{delay: 0.75}}
                  className="button-general"
                  onClick={() => dispatch({ type: "SHOW" })}
                  disabled={disabled}
                >
                  Klasyczne CV
                </motion.button>
                <motion.button
                initial = {{opacity: 0}}
                animate = {{opacity: 1}}
                transition = {{delay: 0.75}}
                className="button-general">Kontakt</motion.button>
              </div>
            </div>
          </div>
          <AnimatePresence>{state.show && <Curriculum />}</AnimatePresence>
        </div>
      </div>
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

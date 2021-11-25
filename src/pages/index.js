import React, { useState, useEffect, useContext } from "react"
import Layout from "../components/Layout"
import { AnimatePresence, motion } from "framer-motion"
import { graphql } from "gatsby"
import {
  BackDispatchContext,
  BackStateContext,
} from "../context/BackContextProvider"
import Curriculum from "../components/Curriculum"

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
        <div className="home__photo"></div>
        <div className="home__content">
          <div className="home__content-text">
            <h1>{hi},</h1>
            <h2>{name}</h2>
            <h2>{who}</h2>
          </div>
          <div className="home__bcard">
            <div className="home__card">BLABLALBALBALBLA</div>
            <div className="home__buttons">
              <button
                className="button-general"
                onClick={() => dispatch({ type: "SHOW" })}
                disabled={disabled}
              >
                Klasyczne CV
              </button>
              <button className="button-general">Kontakt</button>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {state.show && (
            <Curriculum />
          )}
        </AnimatePresence>
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

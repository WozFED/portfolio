import React, { useState, useEffect } from "react"
import Layout from "../components/Layout"
import { motion } from "framer-motion"
import TextAnimateLogic from "../components/TextAnimateLogic"
import { graphql } from "gatsby"
import Curriculum from "../components/Curriculum"

const Home = ({ data }) => {
  const hi = "Hi"
  const name = "I am Patryk Woźniak"
  const who = "Beginner of Front End Developer"

  const [show, setShow] = useState(false)
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
          <div className = "home__bcard"> 
          <div className = "home__card">
            BLABLALBALBALBLA
          </div>
          <div className="home__buttons">
            <button className="button-general">Klasyczne CV</button>
            <button className="button-general">Kontakt</button>
          </div>
            </div>
         
        </div>
        {show ? <Curriculum /> : null}
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

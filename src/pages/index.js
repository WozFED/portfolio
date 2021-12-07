import React, { useState, useEffect, useContext, useRef } from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Header from '../components/Header'
import SkillsList from "../components/SkillsList"
import Projects from "../components/Projects"
import Contact from "../components/Contact"

const Home = () => {
  
  const [contact, setContact] = useState(false)

  return (
    <Layout>
      <Header contact = {setContact}/>
      <SkillsList />
      <Projects />
      {
        contact && <Contact contact = {setContact} />
      }
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

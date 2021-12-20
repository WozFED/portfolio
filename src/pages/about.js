import React, { useEffect, useState } from "react"
import Layout from "../components/Layout"
import { graphql, useStaticQuery } from "gatsby"
import { Icon } from "@iconify/react"
import Tools from '../components/Tools'
import TextAnimateLogic from '../components/TextAnimateLogic'
import Header from "../components/Header"

const About = ({ data }) => {
  const focus = data.focus.nodes
  const tools = data.tools.nodes
 
  return (


    <Layout>
      <div className="page about">
        <div className = "page__wrapper">
        <Header h2 = {"About me"}
        p = {"This is page is about my skills"}/>
        
        <Tools array = {focus} class = {null} />
       <Tools array = {tools}/>
        </div>
      </div>
    </Layout>
  )
}

export default About

export const query = graphql`
  query AboutMe {
    tools: allSkillsJson {
      nodes {
        name
        icon
      }
    }
    focus: allFocusJson {
      nodes {
        name
        icon
        description
      }
    }
  }
`

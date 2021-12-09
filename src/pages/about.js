import React, { useEffect, useState } from "react"
import Layout from "../components/Layout"
import { graphql, useStaticQuery } from "gatsby"
import { Icon } from "@iconify/react"
import Tools from '../components/Tools'
import TextAnimateLogic from '../components/TextAnimateLogic'

const About = ({ data }) => {
  const focus = data.focus.nodes
  const tools = data.tools.nodes
 
  return (


    <Layout>
      <div className="page about">
        <div className = "page__wrapper">

        <div className="header">
          <h2><TextAnimateLogic text ={"About me"} speed = {50} /></h2>
          <p>
            <TextAnimateLogic text={"This is page shows you what can I, what am i focus and general information about me."}
            speed = {25} />
          </p>
        </div>
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

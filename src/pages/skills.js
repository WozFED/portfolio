import React from "react"
import { motion } from "framer-motion"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout"
import SkillBox from "../components/SkillBox"


const Skills = ({data}) => {
    
    const lang = data.lang.nodes
    const framework = data.framework.nodes
  return (
      <Layout>
          <div className="skills">
      <motion.div
        initial={{ x: -500 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.25 }}
        className="skills__wrapper"
      >
        <div className="skills__title">
          <h2>Skills</h2>
          <p>My skills in % version. Still learning other things like ... All the time trying to improve my 
              skills doing exercises, thinking about small projects etc.
          </p>
        </div>

        <div className="skills__container">
            
         <SkillBox initial = {-1500}
         array = {lang}/>
         <div>
             Gdie ja bede?
         </div>
         <SkillBox initial = {1500}
         array = {framework} />
          
        </div>
      </motion.div>
    </div>
      </Layout>
    
  )
}

export default Skills;

export const query = graphql`
query {
    lang: allSkillsJson(filter: {box: {eq: 1}}) {
        nodes {
          howMany
          name
          box
        }
      }
      framework: allSkillsJson(filter: {box: {eq: 2}}) {
        nodes {
          howMany
          name
          box
        }
      }
  }
`
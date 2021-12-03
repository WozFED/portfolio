import React from "react"
import { motion } from "framer-motion"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const Chart = styled.div `
width: ${props => props.width};
height: 100%;
background-color: ${props => props.box === 1 ? "#aa4b41" : "#2f8cab"};
position: absolute;
z-index: 1;
border-top-left-radius: 8px;
border-bottom-left-radius: 8px;
display: flex;
align-items: center;
justify-content: center;
box-sizing: border-box;
`

const Skills = () => {
    const data = useStaticQuery(graphql`
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
    `)

   const lang = data.lang.nodes
   const framework = data.framework.nodes
      console.log(lang)
  return (
    <div className="skills">
      <motion.div
        initial={{ x: -500 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.25 }}
        className="skills__wrapper"
      >
        <div className="skills__title">
          <h2>Skills</h2>
          <p>
            HEJHEJ HEJ HEJ EHJ EHEJ HEJ HEJHEJ HEJ HEJ EHJ EHEJ HEJ HEJHEJ HEJ
            HEJ EHJ EHEJ HEJ HEJHEJ HEJ HEJ EHJ EHEJ HEJ HEJHEJ HEJ HEJ EHJ EHEJ
            HEJHEJHEJ HEJ HEJ EHJ EHEJ HEJHEJHEJ HEJ HEJ EHJ EHEJ HEJHEJHEJ HEJ
            HEJ EHJ EHEJ HEJ
          </p>
        </div>

        <div className="skills__container">
            
          <motion.div
            initial={{ x: -1500 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
            className="skills__box"
          >
            <ul>
                {lang.map((el, id) => {
                    return (
                        <li key = {id}>
                            <p>{el.name}</p>
                        <div className = "box-chart">
                        <p className = "box-percent">{`${el.howMany}`}</p>
                        <Chart width = {el.howMany} box = {el.box} />
                        </div>
                        </li> 
                    )
                   
                })}
                
            </ul>
          </motion.div>
          <motion.div
            initial={{ x: 1500 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
            className="skills__box"
          >
             <ul>
                {framework.map((el, id) => {
                    return (
                        <li key = {id}>
                            <p>{el.name}</p>
                        <div className = "box-chart">
                        <p className = "box-percent">{`${el.howMany}`}</p>
                        <Chart width = {el.howMany} box = {el.box} />
                        </div>
                        </li> 
                    )
                   
                })}
                
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default Skills

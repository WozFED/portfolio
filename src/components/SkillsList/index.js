import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'

const SkillsList = () => {
    const data = useStaticQuery(graphql`
    query Skills {
        allSkillsJson {
        nodes {
          howMany
          name
          icon
        }
      }
    }
    
    `)

    const { nodes } = data.allSkillsJson
    console.log(nodes)
    return (
        <div className = "skills2">
        <h2>My Tools</h2>
        <ul>
            {nodes.map(el => {
                return (
                  <motion.div
                  whileHover = {{scale: 1.2}}
                  transition = {{type: "spring", stiffness: 700}}><li
                  ><p>{el.name}</p><Icon icon = {`${el.icon}`}/></li>
                    </motion.div>
                    
                )
            })}
        </ul>
      </div>
    )
}

export default SkillsList
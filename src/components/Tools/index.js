import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import { Icon } from "@iconify/react"
import { motion } from 'framer-motion'


const Tools = props => {
    console.log(props.array.length)
    return (
       <motion.div
       initial = {{x: -100}}
       animate = {{x: 0}}
       className={`page__focus ${props.class}`}>
           <h2>{props.array.length === 4 ? "Focus" : "Tools"}</h2>
          <ul>
           {props.array.map((el, id) =>{
               return (
                   <motion.li key = {el+id}
                   whileHover = {{scale: 1.2}}
                   transition = {{type: "spring", stiffness: 700}}>
                       <Icon icon = {el.icon} />
                       <p>{el.name}</p>
                       <p>{el.description && el.description}</p>
                       </motion.li>
               )
           })}
          </ul>
        </motion.div> 
    )
    
}

export default Tools
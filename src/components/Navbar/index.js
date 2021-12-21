import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { motion } from "framer-motion"
import { Icon } from "@iconify/react"
import {StaticImage} from 'gatsby-plugin-image'

const Navbar = () => {
  const data = useStaticQuery(graphql`
  query  {
    allNavbarJson {
      nodes {
        name
        link
        icon
        jsonId
      }
    }
  }
`)
const { nodes } = data.allNavbarJson
  return (
    <div className = "navigation">
      <Link to = "/"
      className = "navigation__photo">
        <div className = "navigation__image">
        <StaticImage src = "../../images/portret.jpg" alt = "Photo" />
        </div>
        <h2>Patryk Woźniak</h2>
        <p>Web Developer</p>
      </Link>
      <div className = "navigation__list">
      <ul>
        {nodes.map((nav, id) => {
          return (
              
              <Link to = {`${nav.link}`}
              activeClassName = "current"
              key = {id}>
                <motion.div
                whileHover = {{scale: 1.2, originX: 0}
                }>

              <li key={id}>
              <p>{nav.name}</p>
                
              </li>
              </motion.div>
              </Link>
          )
        })}
      </ul>
      </div>
      <div className = "navigation__social">
        <ul>
          <li><a href = "https://www.codewars.com/users/WozFED/completed_solutions" target = "_blank">
            <Icon icon = "cib:codewars" 
            /></a></li>
            
          <li><a href = "https://www.facebook.com/patryk.wozniak.737" target = "_blank"><Icon icon = "akar-icons:facebook-fill" /></a> </li>
          <li><a href = "https://www.linkedin.com/in/patryk-wo%C5%BAniak-5a5857170/" target = "_blank" >
            <Icon icon = "cib:linkedin-in" /></a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar

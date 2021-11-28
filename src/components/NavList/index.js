import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby";
import { Icon } from '@iconify/react';
import { motion } from "framer-motion";

const NavList = () => {
  const data = useStaticQuery(graphql`
  query MyQuery {
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
      <div className = "navbar__list">

      
        <ul>
        {nodes.map((nav, id) => {
          return (
              
              <Link to = {`${nav.link}`}>
              <motion.li key={id}
              
              whileHover = {{scale: 1.2, originX: 0}}
              transition = {{type: "spring", stiffness: 500}}>
              <p style = {{
                borderBottom: window.location.pathname === `${nav.link}` ? '1px solid white' : null
              }}>{nav.name}</p>
                
              </motion.li>
              </Link>
          )
        })}
      </ul></div>
    )
}

export default NavList;
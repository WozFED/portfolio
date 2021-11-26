import React, {useEffect, useState} from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { Icon } from '@iconify/react';
import { motion } from "framer-motion";
import Language from "../Language";




const Navbar = () => {
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
    <motion.div
    initial = {{height:0}}
    animate = {{height: "10%"}}
    transition = {{duration: 0.25}}
    className="navbar">
      <Language />
      <ul>
        {nodes.map((nav, id) => {
          return (
              <Link to = {`${nav.link}`}>
              <motion.li key={id}
              
              whileHover = {{scale: 1.2, originX: 0}}
              transition = {{type: "spring", stiffness: 500}}>
                <Icon icon = {`${nav.icon}`}/>
              <p>{nav.name}</p>
                
              </motion.li>
              </Link>
          )
        })}
      </ul>
    </motion.div>
  )
}

export default Navbar

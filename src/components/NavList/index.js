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
              <li key={id}>
              <p>{nav.name}</p>
                
              </li>
              </Link>
          )
        })}
      </ul></div>
    )
}

export default NavList;
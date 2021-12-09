import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { motion } from "framer-motion"

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

        </div>
        <h2>Patryk Woźniak</h2>
        <p>Web Developer</p>
      </Link>
      <div className = "navigation__list">
      <ul>
        {nodes.map((nav, id) => {
          return (
              
              <Link to = {`${nav.link}`}>
                <motion.div
                whileHover = {{scale: 1.2, originX: 0}
                }>

              <li style = {{borderBottom: window.location.pathname === nav.link ? '1px solid white' : null}}key={id}>
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
          <li>Facebook</li>
          <li>Facebook</li>
          <li>Facebook</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar

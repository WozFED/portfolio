import React from "react"
import { motion } from "framer-motion"
import Language from "../Language"
import NavList from "../NavList"
import { useStaticQuery, graphql, Link } from "gatsby"

const Navbar = () => {
  return (
    <motion.div className="navbar">
      <div className="navbar__wrapper">
        <div className="navbar__title">
          <h1>Patryk Woźniak</h1>
          <p>Web Developer</p>
        </div>
        <NavList />
      </div>
    </motion.div>
  )
}

export default Navbar

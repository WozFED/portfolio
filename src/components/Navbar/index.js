import React from "react";
import { motion } from "framer-motion";
import Language from "../Language";
import NavList from '../NavList'




const Navbar = () => {
  
  return (
    <motion.div
    initial = {{height:0}}
    animate = {{height: "10%"}}
    transition = {{duration: 0.25}}
    className="navbar">
      <Language />
      <NavList />
    </motion.div>
  )
}

export default Navbar

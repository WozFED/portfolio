import React, { useContext, useState, useEffect } from "react"
import Navbar from "../Navbar"
import {
  BackStateContext,
  BackDispatchContext,
} from "../../context/BackContextProvider"
import { motion } from "framer-motion"

const Layout = ({ children }) => {
  

  return (
    <div className="layout">
      <Navbar />
      {children}
    </div>
  )
}

export default Layout

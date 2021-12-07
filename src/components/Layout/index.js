import React, { useContext, useState, useEffect } from "react"
import Navbar from "../Navbar"
import {
  BackStateContext,
  BackDispatchContext,
} from "../../context/BackContextProvider"
import { motion } from "framer-motion"

const Layout = ({ children }) => {
  const state = useContext(BackStateContext)
  const exit = useContext(BackDispatchContext)
  const [pEvent, setPEvent] = useState("none")
  
  

  return (
    <div className="layout">
      
     
      {state.show && (
        <div
          className="layout__background"
          onClick={() => exit({ type: "SHOW" })}
          style={{ pointerEvents: pEvent }}
        ></div>
      )}
      <Navbar />
      {children}
    </div>
  )
}

export default Layout

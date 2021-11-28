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
  const [background, setBackground] = useState({
    top: 0,
    show: true,
  })
  // useEffect(() => {
  //   if (state.show) {
  //     setTimeout(() => {
  //       setPEvent("all")
  //     }, 1500)
  //   }
  //   if (!state.show) {
  //     setPEvent("none")
  //   }
  // }, [state.show])

  useEffect(()=>{
    setTimeout(()=>{
      setBackground({
        top: -1000,
        show: true
      } )
      setTimeout(()=>{
        setBackground({
          top: -1000,
          show: false
        })
      }, 1500)
    },1500)
  },[])

  return (
    <div className="layout">
      {background.show && <div className = "background"
      style = {{top: background.top }}>
        <h1>Hi, I am Patryk Woźniak and this is my Portoflio</h1>
      </div>}
     
      {state.show && (
        <div
          className="layout__background"
          onClick={() => exit({ type: "SHOW" })}
          style={{ pointerEvents: pEvent }}
        ></div>
      )}
      <Navbar />
      <div className="layout__content">{children}</div>
    </div>
  )
}

export default Layout

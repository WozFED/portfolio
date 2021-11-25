import React, { useContext, useState, useEffect } from "react"
import Navbar from "../Navbar"
import {
  BackStateContext,
  BackDispatchContext,
} from "../../context/BackContextProvider"

const Layout = ({ children }) => {
  const state = useContext(BackStateContext)
  const exit = useContext(BackDispatchContext)
  const [pEvent, setPEvent] = useState("none")

  useEffect(() => {
    if (state.show) {
      setTimeout(() => {
        setPEvent("all")
      }, 1500)
    }
    if (!state.show) {
      setPEvent("none")
    }
  }, [state.show])

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
      <div className="layout__content">{children}</div>
    </div>
  )
}

export default Layout

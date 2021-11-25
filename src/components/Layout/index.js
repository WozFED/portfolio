import React, {useContext} from "react"
import Navbar from "../Navbar"
import {
  BackStateContext,
  BackDispatchContext
} from '../../context/BackContextProvider'

const Layout = ({ children }) => {
  const state = useContext(BackStateContext)
  const exit = useContext(BackDispatchContext)
  console.log(state, state.show)
  return (
      <div className= "layout">
      {state.show && <div className = "layout__background"
      onClick = {() => exit({type:"SHOW"})}>HALO JESTEM</div>}
      <Navbar />
      <div className="layout__content">
        {children}
      </div>
    </div>
    
  )
}

export default Layout

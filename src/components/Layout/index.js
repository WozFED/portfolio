import React from "react"
import Navbar from "../Navbar"
import Language from "../Language"

const Layout = ({ children }) => {
  
  return (
    <div className="layout">
      <Navbar />
      <div className="layout__content">
        {children}
      </div>
    </div>
  )
}

export default Layout

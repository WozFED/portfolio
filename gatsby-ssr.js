import "./src/styles/themes/default/theme.scss"
import React from "react"
import BackContextProvider from "./src/context/BackContextProvider"

export const wrapRootElement = ({ element }) => {
  return <BackContextProvider>{element}</BackContextProvider>
}
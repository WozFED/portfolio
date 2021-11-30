import React, { useState, useEffect, useContext } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { graphql } from "gatsby"
import Delay from "../Delay"

const AnimateMovingBack = props => {
    return (
      <motion.div
      animate={{ width: props.array, left: props.arrayP }}
      transition={{ delay: props.delay / 1000, duration: 0.4 }}
      className="header__back"
      style={{ height: props.height }}
    ></motion.div>
    )
    
}

export default AnimateMovingBack;
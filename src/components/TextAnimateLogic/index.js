import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"

const TextAnimateLogic = props => {
  const [finalText, setFinalText] = useState("")
  const [index, setIndex] = useState(0)
  useEffect(() => {

      if (index < props.text.length) {
       
        setTimeout(() => {
        setFinalText(finalText + props.text[index])
        setIndex(index + 1)
      }, props.speed)
       
      
      } 
 
    
  }, [index])

  return (
    <>{finalText}</>
  )
}

export default TextAnimateLogic

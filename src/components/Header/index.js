import React from "react"
import { motion } from "framer-motion"
import TextAnimateLogic from "../TextAnimateLogic"
import { Icon } from "@iconify/react"

const Header = props => {
  const txt = "Still trying to improve my skills doing JS exercsies, creating small projects that not ready to show. Im setting goals in programming and all the time trying to be better. The job could give me more experience and learn me a lot of new content"
                
  return (
    <div className="header">
      <div className="header__wrapper">
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "85%" }}
          transition={{ duration: 1.5 }}
          className="header__photo"
        >
          <div className="header__photo-wrapper">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="photo"
            ></motion.div>
          </div>
        </motion.div>

        <div className="header__text">
          <motion.div 
          initial = {{left: -200, opacity: 0}}
          animate = {{left: 20, opacity: 1}}
          transition = {{delay: 1.5}}
          className="header__text-wrapper">
            <div className = "header__text-text">
              <h2>Hi there,</h2>
              <p>
                {txt}
              </p>
            </div>
            <div className="header__buttons">
              <button className="button__general" onClick = {() => props.contact(true)}>Kontakt</button>
              <button className="button__general" onClick = {() => props.contact(false)}>Klasyczne CV</button>
            </div>
            <div className="header__social">
              <div className="header__media">
                <div>
                  <Icon icon = "dashicons:facebook" />
                  <Icon icon = "fa:bitbucket" />
                  <Icon icon = "cib:linkedin-in" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Header

import React from "react"
import { motion } from "framer-motion"
import Delay from '../Delay'
import TextAnimateLogic from "../TextAnimateLogic"

const Header = scroll => {
  const txt = "Im passionate with prograaming object and really hope to got a sdasdasdadsadasds sdasdasdadsadasds sdasdasdadsadasds sdasdasdadsadasds sdasdasdadsadasds sdasdasdadsadasds sdasdasdadsadasds sdasdasdadsadasds"
 
                
  return (
    <div className="header">
      <div className="header__wrapper">
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
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
          initial = {{left: 100, opacity: 0}}
          animate = {{left: 780, opacity: 1}}
          transition = {{delay: 1.5}}
          className="header__text-wrapper">
            <div className = "header__text-text">
              <h2>Hi there,</h2>
              <p>
                {txt}
              </p>
            </div>
            <div className="header__buttons">
              <button className="button__general">Kontakt</button>
              <button className="button__general">Kontakt</button>
            </div>
            <div className="header__social">
              <div className="header__media">
                <div>
                  {" "}
                  <p>Facebokk</p>
                  <p>LinkdeIn</p>
                  <p>Bitbucket</p>
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

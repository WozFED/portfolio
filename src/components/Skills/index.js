import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
    return (
        <div className = "skills">
           <motion.div 
            initial = {{x: -500}}
            animate = {{x: 0}}
            transition = {{duration: 0.25}}
            className = "skills__wrapper">
            <div className = "skills__title">
                <h2>Skills</h2>
                <p>HEJHEJ HEJ HEJ EHJ EHEJ HEJ HEJHEJ HEJ HEJ EHJ EHEJ HEJ
                HEJHEJ HEJ HEJ EHJ EHEJ HEJ
                HEJHEJ HEJ HEJ EHJ EHEJ HEJ
                HEJHEJ HEJ HEJ EHJ EHEJ HEJHEJHEJ HEJ HEJ EHJ EHEJ HEJHEJHEJ HEJ HEJ EHJ EHEJ HEJHEJHEJ HEJ HEJ EHJ EHEJ HEJ
                </p>
            </div>
            
            <div className = "skills__container">
            <motion.div
            initial = {{x: 1500}}
            animate = {{x: 0}}
            transition = {{duration: 0.5}}
            className = "skills__box">

            </motion.div>
            <motion.div 
            initial = {{x: -1500}}
            animate = {{x: 0}}
            transition = {{duration: 0.5}}
            className = "skills__box">
                
            </motion.div>
            
            </div>
            
            </motion.div>

            
        </div>

    )
}

export default Skills
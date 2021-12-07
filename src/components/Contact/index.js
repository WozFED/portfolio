import React from 'react'
import { motion } from 'framer-motion';

const Contact = props => {
    return (
        <div className = "contact"
        onClick = {() => props.contact(false)}>
            <div className = "contact__about">
                <motion.div
            initial = {{height: 0}}
            animate = {{height: '100%'}}
            transition = {{duration: 2}}
            className = "about">
                    bla bla bl
                </motion.div>
            </div>
            <div className = "contact__form">
                <motion.div
            initial = {{height: 0}}
            animate = {{height: '100%'}}
            transition = {{duration: 2}}  className = "form">
                    bla bla bla
                </motion.div>
            </div>

        </div>
    )
}

export default Contact;
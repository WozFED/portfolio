import React, {useEffect, useState} from 'react';
import { motion } from 'framer-motion';


const SkillBox = props => {
    const [count, setCount] = useState(0)

    useEffect(()=>{
            setTimeout(()=>{
                 setCount(count+1) 
            }, 25)
    },[count])
    return (
        <motion.div
        initial={{ x: props.initial }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="skills__box"
      >
        <ul>
            {props.array.map((el, id) => {
                return (
                    <li key = {id}>
                        <p>{el.name}</p>
                    <div className = "box__chart">
                    <p className = "box__percent">{count < el.howMany ? count + "%" : el.howMany + "%"}</p> 
                    <div 
                    style = {{width: count < el.howMany ? count + "%" : el.howMany + "%"}}
                    className = "box__chartLine"></div>
                  
                    
                    </div>
                    </li> 
                )
               
            })}
            
        </ul>
      </motion.div>
    )
}

export default SkillBox;
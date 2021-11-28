import React, {useEffect, useState} from 'react'
import TextAnimateLogic from '../TextAnimateLogic'

const Delay = (props) => {
    const [show, setShow] = useState(false)

    useEffect(()=>{
        setTimeout(()=>{
            setShow(true)
        },props.delay)
    },[])
    return (
        show && <TextAnimateLogic text = {props.text} speed = {props.speed} />
    )
}

export default Delay
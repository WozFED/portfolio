import React from 'react'
import TextAnimateLogic from '../TextAnimateLogic'

const Header = props => {
    return (
        <div className = "header">
            <h2><TextAnimateLogic text = {props.h2} speed = {50} /></h2>
            <p><TextAnimateLogic text = {props.p} speed = {25}/></p>
        </div>
    )
}

export default Header;
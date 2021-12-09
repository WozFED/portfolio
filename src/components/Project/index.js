import React from 'react'
import Img from 'gatsby-image'
import { motion } from 'framer-motion'
import { Link } from 'gatsby'

const Project = (props) => {
    return (
        
            props.projects.map((el, id) =>{
                return (
                   
                    <motion.div
                    initial = {{x: -100}}
                    animate = {{x: 0}}
                    className = "page__container">
                        <Link to = {`/${el.frontmatter.slug}`}>
                        <div>

                        <h3>Projekt #{id+1}</h3>
                        <p>{el.frontmatter.title}</p>
                        </div>
                        
                        <Img
                        className = "page__img"
                        fluid = {el.frontmatter.featuredImg.childImageSharp.fluid} />
                      </Link></motion.div>
                  
                )
            })
        
    )
}

export default Project;
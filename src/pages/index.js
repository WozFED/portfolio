import React, { useState, useEffect, useContext, useRef } from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"

const Home = () => {
  
  const [contact, setContact] = useState(false)

  return (
    <Layout>
      <div className = "home">
        
        <div className = "home__header">
        <h1>Hi, I am Patryk Woźniak</h1>
        <p>Still trying to improve my skills doing JS exercsies,
          creating small projects that not ready to show.</p>
         <p>Im setting goals in programming and all the time trying to be better. </p>
         <p> The job could give me more experience and learn me a lot of new content</p>
         <button className = "button__home">
          Klasyczne CV
        </button>
        <button className = "button__home">
          Kontakt
        </button>
        </div>
        
      </div>
      
    </Layout>
  )
}

export default Home

export const query = graphql`
  query {
    allHomeJson {
      nodes {
        name
        text
        site
      }
    }
  }
`

import React from "react"
import Layout from "../components/Layout"
import {Link } from "gatsby"
import pdf from "../../static/CV_Patryk_Woźniak (3).pdf"

const Home = () => {
  return (
    <Layout>
      <div className="home">
        <div className="home__header">
          <h1>Hi, I am Patryk Woźniak</h1>
          <p>
            Still trying to improve my skills doing JS exercsies, creating small
            projects that not ready to show.
          </p>
          <p>
            Im setting goals in programming and all the time trying to be
            better.
          </p>
          <p>
            The job could give me more experience and teach me a lot of new
            things
          </p>
          <div className="home__button">
            <a href={pdf} target="_blank" >
              <button className="button__home">Classic CV</button>
            </a>
            <Link to="/contact">
              <button className="button__home">Contact</button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home



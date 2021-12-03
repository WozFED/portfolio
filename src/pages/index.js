import React, { useState, useEffect, useContext, useRef } from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Header from '../components/Header'

const Home = () => {
  

  return (
    <Layout>
      <Header />
      
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

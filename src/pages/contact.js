import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Header from '../components/Header'
import Table from "../components/Table"

const ContactPage = ({ data }) => {
  const table = data.allContactJson.nodes
  return (
    <Layout>
      <div className="page ">
        <div className="page__wrapper contact">
          <Header h2={"Contact me"} p={"Here many ways to contact with me"} />
          <Table table = {table}/>
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage

export const query = graphql`
  query Table {
    allContactJson {
      nodes {
        a
        name
        title
      }
    }
  }
`

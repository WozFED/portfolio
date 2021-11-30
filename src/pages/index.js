import React, { useState, useEffect, useContext, useRef } from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Header from '../components/Header'
import Skills from "../components/Skills"

const Home = ({ data }) => {
  const [scrollPosition, setSrollPosition] = useState(0);
  const [open, setOpen] = useState(false)
    const handleScroll = () => {
        const position = window.pageYOffset;
        setSrollPosition(position);
    };
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
        
    }, []);
    useEffect(()=> {
      if(scrollPosition > 300){
        setOpen(true)
      }
    })
  return (
    <Layout>
      <Header />
      {open &&
      <Skills />}
      
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

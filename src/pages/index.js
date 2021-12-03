import React, { useState, useEffect, useContext, useRef } from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Header from '../components/Header'
import Skills from "../components/Skills"
import Projects from "../components/Projects"

const Home = ({ data }) => {
  const [scrollPosition, setSrollPosition] = useState(0);
  const [open, setOpen] = useState({
    skills: false,
    projects: false
  })
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
        setOpen({
          skills: true,
          projects: false
        })
      }
      if(scrollPosition > 600){
        setOpen({
          skills: open.skills,
          projects: true
        })
      }
    },[scrollPosition])

    useEffect(()=>{
      window.scrollTo(0, 0)
    },[])
    
  return (
    <Layout>
      <Header />
      {open.skills &&
      <Skills />}
      {open &&
      <Projects />}
      
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

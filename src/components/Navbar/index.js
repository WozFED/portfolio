import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { Icon } from '@iconify/react';

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allNavbarJson {
        nodes {
          name
          link
          icon
        }
      }
    }
  `)
  const { nodes } = data.allNavbarJson
  return (
    <div className="navbar">
      <ul>
        {nodes.map((nav, id) => {
          return (
            <Link to={`${nav.link}`}>
              <li key={id}><Icon icon = {`${nav.icon}`}/>{nav.name}</li>
            </Link>
          )
        })}
      </ul>
    </div>
  )
}

export default Navbar

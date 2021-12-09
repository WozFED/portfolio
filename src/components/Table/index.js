import React from "react"
import { motion } from "framer-motion"

const Table = props => {
  
  return (
    <motion.div
    initial = {{x: -20}}
    animate = {{x: 0}}
    className="page__contact">
      <table className="table">
        <tr>
          <td>
            <p>E-mail:</p>
          </td>
          <td>
            <p
            >
              pwozniakgda@gmail.com
            </p>
          </td>
          <td>
            <p>Number:</p>
          </td>
          <td>
            <p
            >
             511-500-066
            </p>
          </td>
        </tr>
        <td>
            <p>Facebook:</p>
          </td>
          <td>
            <p
            >
              <a href = "" target = "_blank">Click me!</a>
            </p>
          </td>
      </table>
    </motion.div>
  )
}

export default Table

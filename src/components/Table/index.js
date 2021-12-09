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
            <p>Adres e-mail:</p>
          </td>
          <td>
            <p
            >
              pwozniakgda@gmail.com
            </p>
          </td>
        </tr>
       
      </table>
    </motion.div>
  )
}

export default Table

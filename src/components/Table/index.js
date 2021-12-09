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
        {props.table.map((el, id) => {
          return (
            <tr key={id}>
              <td>
                <p>{el.title}</p>
              </td>
              <td>
                <p>
                  <a href={el.a} target="_blank" rel="noreferrer">
                    {el.name}
                  </a>
                </p>
              </td>
            </tr>
          )
        })}
      </table>
    </motion.div>
  )
}

export default Table

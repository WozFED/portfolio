import React from "react"

export const BackStateContext = React.createContext()
export const BackDispatchContext = React.createContext()

const initialState = {
  show: false
}

function reducer(state, action) {
  switch (action.type) {
    case "SHOW": {
      return {
        show: state.show === false ? true : false
      }
    }
    default:
      throw new Error("Bad Action Type")
  }
}

const BackContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <BackStateContext.Provider value={state}>
      <BackDispatchContext.Provider value={dispatch}>
        {children}
      </BackDispatchContext.Provider>
    </BackStateContext.Provider>
  )
}

export default BackContextProvider
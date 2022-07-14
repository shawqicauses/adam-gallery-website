import { createContext, useContext, useState } from "react"

const Context = createContext({})

export const Provider = ({ children }) => {
  const [content, setContent] = useState([])
  const exposed = { content, setContent }
  return <Context.Provider value={exposed}>{children}</Context.Provider>
}

export const useContent = () => {
  const content = useContext(Context)
  if (!content) throw new Error("Context must be used within a Provider")
  return content
}

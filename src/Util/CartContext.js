import React, { createContext, useState, useContext } from 'react'

const CartContext = createContext()

const CartContextProvider = ({ children }) => {
  const [itemNumber, setItemNumber] = useState(2)

  const data = {
    itemNumber,
    setItemNumber,
  }

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>
}

export { CartContext, CartContextProvider, useContext }

import React, { useState, createContext } from 'react';

export const BurgerContext = createContext();

export const BurgerProvider = (props) => {
  const [value, setValue] = useState("")


  return (
    <BurgerContext.Provider value = {[]}>
      {props.children}
    </BurgerContext.Provider>
  )
}
import React, { useState, useContext } from 'react';
import Patty from './Patty';
import BunsAndToppings from './BunsAndToppings';
import Condiments from './Condiments';
import {BurgerContext} from './BurgerContext';

const Success = () => {
  const [
    PattyValues,
    setPattyValues,
    CondimentsValues,
    setCondimentsValues,
    BunsValues,
    setBunsValues,
    Toppings,
    setToppingsValues,
  ] = useContext(BurgerContext);
  return(
    <div>
        {}
    </div>)
};
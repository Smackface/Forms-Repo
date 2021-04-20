import React from 'react';
import * as yup from 'yup';
import {Formik, formik} from 'formik';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { render } from '@testing-library/react';
import Patty from './Burger Forms/Patty.js';
import BunsAndToppings from './Burger Forms/BunsAndToppings.js';
import Condiments from './Burger Forms/Condiments';




function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Patty" component={Patty} />
        <Route path="/BunsAndToppings" component={BunsAndToppings} />
        <Route path="/Condiments" component={Condiments} />
      </Switch>
    </Router>
  );
}

export default App;
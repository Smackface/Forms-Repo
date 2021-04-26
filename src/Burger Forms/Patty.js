import React, { Component, createContext, useContext, useReducer } from "react";
import { useState } from "react"
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { BurgerContext } from './Context';



const PattyForm = () => {
  const [value, setValue] = useContext(BurgerContext)
    const formik = useFormik({
    initialValues: { Patty: "" },
    validationSchema: Yup.object({
      Patty: Yup.string().max(3, "Yes or No").required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="Patty">Patty?</label>
      <input
        id="Patty"
        name="Patty"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.Patty}
      />
      {formik.touched.Patty && formik.errors.Patty ? (
        <div>{formik.errors.Patty}</div>
      ) : null}
      <Link to="/BunsAndToppings">
        <button
          onClick={() => setValue(value)}
          type="submit"
          id="pattybutton"
          disabled={(!formik.isValid, !formik.touched.Patty)}
        >
          Submit
        </button>
      </Link>
    </form>
  );
};

export default PattyForm;

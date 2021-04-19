import React, { Component } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const BunsAndToppingsForm = () => {
  const formik = useFormik({
    initialValues: {
      Buns: "",
    },
    validationSchema: Yup.object({
      Buns: Yup.string().max(3, "Yes or No").required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="Buns">Buns?</label>
      <input
        id="Buns"
        name="Buns"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.Buns}
      />
      {formik.touched.Buns && formik.errors.Buns ? (
        <div>{formik.errors.Buns}</div>
      ) : null}

      <label htmlFor="Toppings">Toppings?</label>
      <input
        id="Toppings"
        name="Toppings"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.Toppings}
      />
      {formik.touched.Toppings && formik.errors.Toppings ? (
        <div>{formik.errors.Toppings}</div>
      ) : null}
      <Link to="/Condiments">
        <button type="submit" id="bunsbutton">
          Submit
        </button>
      </Link>
    </form>
  );
};

export default BunsAndToppingsForm;

import React, { Component } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const CondimentsForm = () => {
  const formik = useFormik({
    initialValues: {
      Condiments: "",
    },
    validationSchema: Yup.object({
      Condiments: Yup.string().max(3, "Yes or No").required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="Condiments">Condiments?</label>
      <input
        id="Condiments"
        name="Condiments"
        type="select"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.Condiments}
      />
      {formik.touched.Condiments && formik.errors.Condiments ? (
        <div>{formik.errors.Condiments}</div>
      ) : null}

      <button
        type="submit"
        disabled={(!formik.isValid, !formik.touched.Condiments)}
      >
        Submit
      </button>
    </form>
  );
};

export default CondimentsForm;

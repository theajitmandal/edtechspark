"use client";
import React from "react";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
// import Header from "@/components/Header/page";
// import Footer from "@/components/Footer/page";

const Register = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .required("No Password Provided")
        .min(8, "Password is too short - should be 8 chars minimum")
        .matches(/[^\w]/, "Password must contain 1 special character"),
    }),
    onSubmit: (values) => {
      console.log('Hello');
      console.log(values);
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div>
      {/* <Header /> */}
      <div className="flex flex-col mx-auto w-1/4 bg-white shadow text-center m-10 p-5">
        <h1 className="text-2xl text-bold text-center mt-2">
          Signup and Start Learning
        </h1>
        <div className="flex flex-col gap-4 m-5 p-2">
          <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
            <input
              id="fullname"
              name="fullname"
              onChange={formik.handleChange}
              value={formik.values.fullname}
              
              type="text"
              label="Full Name"
            />

            <input
              id="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              
              type="email"
              label="Email"
            />
            <input
              id="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              
              type="password"
              label="Password"
            />
            <button type="submit" color="primary">Signup</button>
          </form>

          <p>
            Already have an account?
            <span className="text-lg text-sky-400">
              <Link href="/login"> Login</Link>
            </span>
          </p>
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default Register;

// import React from 'react';
// import { useFormik } from 'formik';

// const Register = () => {
//   const formik = useFormik({
//     initialValues: {
//       firstName: '',
//       lastName: '',
//       email: '',
//     },
//     onSubmit: values => {
//       alert(JSON.stringify(values, null, 2));
//     },
//   });
//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <label htmlFor="firstName">First Name</label>
//       <input
//         id="firstName"
//         name="firstName"
//         type="text"
//         onChange={formik.handleChange}
//         value={formik.values.firstName}
//       />
//       <label htmlFor="lastName">Last Name</label>
//       <input
//         id="lastName"
//         name="lastName"
//         type="text"
//         onChange={formik.handleChange}
//         value={formik.values.lastName}
//       />
//       <label htmlFor="email">Email Address</label>
//       <input
//         id="email"
//         name="email"
//         type="email"
//         onChange={formik.handleChange}
//         value={formik.values.email}
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default Register;

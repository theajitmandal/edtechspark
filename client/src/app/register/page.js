"use client";
import React from "react";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import Header from "@/components/Header/page";
import Footer from "@/components/Footer/page";

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
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div>
      <Header />
      <div className="flex flex-col mx-auto w-1/4 bg-white shadow shadow-lg text-center m-10 p-5">
        <h1 className="text-2xl text-bold text-center mt-2">
          Signup and Start Learning
        </h1>
        <div className="flex flex-col gap-4 m-5 p-2">
          <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
            <Input
              id="fullname"
              name="fullname"
              onChange={formik.handleChange}
              value={formik.values.fullname}
              isRequired
              type="text"
              label="Full Name"
            />

            <Input
              id="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              isRequired
              type="email"
              label="Email"
            />
            <Input
              id="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              isRequired
              type="password"
              label="Password"
            />
            <Button color="primary">Signup</Button>
          </form>

          <p>
            Already have an account?
            <span className="text-lg text-sky-400">
              <Link href="/login"> Login</Link>
            </span>
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Register;

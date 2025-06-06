"use client";
import React from "react";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import Header from "@/components/Nav/page";
import Footer from "@/components/Footer/page";
import toast from "react-hot-toast";

const Register = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    // validationSchema: Yup.object({
    //   fullName: Yup.string()
    //     .max(15, "Must be 15 characters or less")
    //     .required("Required"),
    //   email: Yup.string().email("Invalid email address").required("Required"),
    //   password: Yup.string()
    //     .required("No Password Provided")
    //     .min(8, "Password is too short - should be 8 chars minimum")
    //     .matches(/[^\w]/, "Password must contain 1 special character"),
    // }),
    onSubmit: values => {
      registerUser(values);
    },
  });

  const registerUser = async(values) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
  };
  const response = await fetch('http://localhost:4000/register', requestOptions);
  const data = await response.json()
  if(response.status == '200'){
    toast.success(data.msg)
  }else{
    toast.error(data.msg)
  }
  }
  return (
    <div>
      <Header />
      <div className="flex flex-col mx-auto w-1/4 bg-white shadow text-center m-10 p-5">
        <h1 className="text-2xl text-bold text-center mt-2">
          Signup and Start Learning
        </h1>
        <div className="flex flex-col gap-4 m-5 p-2">
          <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
            <Input
              id="name"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              
              type="text"
              label="Name"
            />

            <Input
              id="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              
              type="email"
              label="Email"
            />

            <Input
              id="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              
              type="password"
              label="Password"
            />
            <Button type="submit" color="primary">Signup</Button>
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
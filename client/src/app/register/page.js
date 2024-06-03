"use client"
import React from "react";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useFormik } from "formik";

const Register = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="flex flex-col mx-auto w-1/4 bg-white shadow shadow-lg text-center">
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
          <Button color="primary">
            Signup
          </Button>
        </form>
        <p>
          Already have an account?
          <span className="text-lg text-sky-400">
            <Link href="/login"> Login</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;

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
import { useRouter } from "next/navigation";

const Login = () => {
  const Router = useRouter()
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      loginUser(values);
    },
  });

  const loginUser = async (values) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    };
    const response = await fetch("http://localhost:4000/login", requestOptions);
    const data = await response.json();
    if (response.status == "200") {
      toast.success(data.msg);
      Router.push('/')
      
    } else {
      toast.error(data.msg);
    }
  };
  return (
    <div>
      <Header />
      <div className="flex flex-col mx-auto w-1/4 bg-white shadow text-center m-10 p-5">
        <h1 className="text-2xl text-bold text-center mt-2">
          Login to Your Account
        </h1>
        <div className="flex flex-col gap-4 m-5 p-2">
          <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
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
            <Button type="submit" color="primary">
              Login
            </Button>
          </form>
          <p>
            <span className="text-lg text-sky-400">
              <Link href="/login">Forgot Password</Link>
            </span>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
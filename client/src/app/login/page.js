import React from "react";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex flex-col mx-auto w-1/4 bg-white shadow shadow-lg text-center">
      <h1 className="text-2xl text-bold text-center mt-2">
        Login to your Account
      </h1>
      <div className="flex flex-col gap-4 m-5 p-2">
        <Input type="email" label="Email" />
        <Input type="password" label="Password" />
        <Button color="primary">Login</Button>
        <p>
          <span className="text-lg text-sky-400">
            <Link href="/">Forgot Password</Link>
          </span>
        </p>
      </div>
    </div>
  );
}

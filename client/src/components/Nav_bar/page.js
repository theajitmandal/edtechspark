"use client";
import React from "react";

const Nav_bar = () => {
  return (
    <nav className="w-full h-20 bg-white shadow-sm flex justify-between items-center p-4">
      <div className="flex items-center">
        <div>
          <img src="/edtechsparklogo.svg" className="w-30 h-14 md:w-24 md:h-12" alt="logo" />
        </div>
        <div>
          <p>EDTECHSPARK</p>
        </div>
      </div>
      <ul className="hidden md:flex gap-x-5">
        <li>Home</li>
        <li>Explore</li>
        <li>Contact</li>
        <li>Article</li>
        <li>Tutorials</li>
      </ul>
      <div className="hidden md:flex gap-x-6">
        <button>Login</button>
        <button>Signup</button>
      </div>
      <div className="md:hidden">
        <a className="text-4xl" href="#">&#8801;</a>
      </div>
    </nav>
  );
};

export default Nav_bar;

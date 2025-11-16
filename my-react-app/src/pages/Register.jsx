import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputField from "../components/InputField";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Register:", { name, email, password, confirmPassword });
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Image/Illustration */}
      <div className="hidden lg:flex w-1/2 bg-linear-to-tr from-green-800 to-teal-800 items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1581091215362-32f0f2286ca0?auto=format&fit=crop&w=800&q=80"
          alt="Hardware wala image"
          className="w-4/5 rounded-2xl shadow-lg text-white"
        />
      </div>

      {/* Right Form */}
      <div className="flex flex-col justify-center w-full lg:w-1/2 px-10">
        <div className="max-w-md w-full mx-auto bg-white p-10 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Register</h2>
          <form onSubmit={handleRegister}>
            <InputField
              label="Full Name"
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <InputField
              label="Email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputField
              label="Password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputField
              label="Confirm Password"
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition duration-300 font-semibold mt-4"
            >
              Register
            </button>
          </form>
          <p className="text-center mt-4 text-gray-600">
            Already have an account?{" "}
            <Link to="/" className="text-teal-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

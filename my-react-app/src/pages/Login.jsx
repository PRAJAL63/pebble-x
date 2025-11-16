import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputField from "../components/InputField";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login:", { email, password });
  };

  return (
    <div className="flex min-h-screen">
      <div className="hidden lg:flex w-1/2 bg-linear-to-tr from-blue-950 to-blue-950 items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1581092334518-2e4b0c08f3c2?auto=format&fit=crop&w=800&q=80"
          alt="Hardware wala image ki animation"
          className="w-4/5 rounded-2xl shadow-lg text-white"
        />
      </div>

      <div className="flex flex-col justify-center w-full lg:w-1/2 px-10">
        <div className="max-w-md w-full mx-auto bg-white p-10 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Login</h2>
          <form onSubmit={handleLogin}>
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
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-300 font-semibold mt-4"
            >
              Login
            </button>
          </form>
          <p className="text-center mt-4 text-gray-600">
            Don't have an account?{" "}
            <Link to="/register" className="text-indigo-600 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

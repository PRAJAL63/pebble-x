import React from "react";

export default function InputField({ label, type, placeholder, value, onChange }) {
  return (
    <div className="flex flex-col mb-4 w-full">
      <label className="mb-2 text-gray-700 font-medium">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="p-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none transition duration-200"
      />
    </div>
  );
}

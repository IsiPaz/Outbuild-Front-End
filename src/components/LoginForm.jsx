import React, { useState } from "react";
import ErrorToast from "./ErrorToast";
import CloseEye from "../assets/CloseEye";
import OpenEye from "../assets/OpenEye";

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorToastOpen, setErrorToastOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const auth_email = "prologin@prologin.com";
  const auth_password = "ProLogin123456";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === auth_email && password === auth_password) {
      setErrorToastOpen(false);
      onLogin();
    } else {
      setErrorToastOpen(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Email address
        </label>
        <div className="mt-2">
          <input
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
            autoComplete="email"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Password
        </label>
        <div className="relative mt-2">
          <input
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
            required
            autoComplete="current-password"
            className="block w-full rounded-md border-0 py-1.5 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute inset-y-0 right-0 flex items-center pr-3"
          >
            {showPassword ? <OpenEye /> : <CloseEye />}
          </button>
        </div>
      </div>

      <ErrorToast
        message="The login failed. Please check your credentials."
        open={errorToastOpen}
        setOpen={setErrorToastOpen}
      />

      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Log in
        </button>
      </div>
    </form>
  );
};

export default LoginForm;

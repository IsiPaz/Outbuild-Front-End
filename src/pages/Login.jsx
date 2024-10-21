import React from "react";
import { useNavigate } from "react-router-dom";
import { DASHBOARD_ROUTE } from "../constants/routes";
import { useAuth } from "../utils/AuthContext";
import Logo from "../assets/logo.jpeg";
import LoginForm from "../components/LoginForm";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate(DASHBOARD_ROUTE);
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm p-6 border border-gray-300 rounded-lg shadow-lg bg-white">
        <img alt="Your Company" src={Logo} className="mx-auto h-10 w-auto" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          ProLogin 🚀
        </h2>

        <div className="mt-10">
          <LoginForm onLogin={handleLogin} />
        </div>
      </div>
    </div>
  );
}

export default Login;

import React from "react";
import { useNavigate } from "react-router-dom";
import { LOGIN_ROUTE } from "../constants/routes";
import { useAuth } from "../utils/AuthContext";

const Header = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate(LOGIN_ROUTE);
  };

  return (
    <nav className="bg-transparent px-4 py-7">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex-grow text-center">
          <h1 className="text-black font-bold text-2xl">ProDashboard</h1>
        </div>
        <button
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500 transition"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Header;

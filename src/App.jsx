import React from "react";
import { DASHBOARD_ROUTE, LOGIN_ROUTE } from "./constants/routes";
import { Routes, Route } from "react-router-dom";
import { useAuth } from "./utils/AuthContext";
import "./index.css";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  const { isLoggedIn } = useAuth();

  return (
    <Routes>
      {isLoggedIn ? (
        <>
          <Route path={DASHBOARD_ROUTE} element={<Dashboard />} />
          <Route path="*" element={<Dashboard />} />
        </>
      ) : (
        <>
          <Route path={LOGIN_ROUTE} element={<Login />} />
          <Route path="*" element={<Login />} />
        </>
      )}
    </Routes>
  );
}

export default App;

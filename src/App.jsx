import React from "react";
import Login from "./components/Login";
import Account from "./components/Account";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/account" element={<Account />} />
          </Route>
          <Route path="/" exact element={<Login />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

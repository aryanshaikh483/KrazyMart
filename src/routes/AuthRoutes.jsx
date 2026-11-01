import Login from "@/pages/Login";
import Register from "@/pages/Register";
import React from "react";
import { Route, Routes, Navigate } from "react-router";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Redirect unknown auth routes */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default AuthRoutes;
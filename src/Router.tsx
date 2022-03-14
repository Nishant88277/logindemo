import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./containers/login";
import Photos from "./containers/Photos";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<Login />} />
        <Route path="/photo-list" element={<Photos />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

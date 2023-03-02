import React from "react";
import { Route, Routes, BrowerRouter, BrowserRouter } from "react-router-dom";
import Home from "./PAGES/HomePage/home";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="*"
          element={
            <div>
              <h1>404 NOT FOUND</h1>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

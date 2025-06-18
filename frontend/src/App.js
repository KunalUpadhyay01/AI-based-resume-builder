import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Pages/Auth/Register";
import About from "./Pages/About";
import Login from "./Pages/Auth/Login";
import Templates from "./Pages/Templates";
import PersonalDetails from "./Pages/ResumeInfo/PersonalDetails";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/personaldetails" element={<PersonalDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

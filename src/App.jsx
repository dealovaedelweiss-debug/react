import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { useState } from "react";
// import heroImg from "./assets/hero.png";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
// import { useState } from "react";
import "./App.css";
// import DataSiswa from "./componen/DataSiswa";
// import FormSiswa from "./componen/FormSiswa";
import Login from "./pages/login";
import Dashboard from "./pages/Dashboard";
import User from "./pages/User";
// function counter(){
//   //getter count
//   //setter setCount
// }

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;

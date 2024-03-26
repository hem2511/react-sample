import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./Page/LandingPage1/LandingPage";
import SignIn from "./Page/SignIn";
import SignUp from "./Page/SignUp";
import Dashboard from "./Page/Dashboard";
import FormC from "./Page/FormC";
import Layout from "./Layout/Layout";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/layout" element={<Layout />} />
          <Route exact path="/sidebar" element={<Sidebar />} />

          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/formc" element={<FormC />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

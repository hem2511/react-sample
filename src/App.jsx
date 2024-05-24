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
import Settings from "./Page/Settings";
import Cards from "./components/Cards";
import UnitOfMeasure from "./components/SettingsPages/UnitOfMeasure";
import Operation from "./components/SettingsPages/Operation";
import Resource from "./components/SettingsPages/Resource";
import Location from "./components/SettingsPages/Location";
import Dropdown from "./Page/Dropdown";

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
          <Route exact path="/settings" element={<Settings />} />
          <Route exact path="/cards" element={<Cards />} />
          <Route exact path="/formc" element={<FormC />} />
          <Route exact path="/Uom" element={<UnitOfMeasure />} />
          <Route exact path="/operation" element={<Operation />} />
          <Route exact path="/resource" element={<Resource />} />
          <Route exact path="/location" element={<Location />} />
          <Route exact path="/dropdown" element={<Dropdown />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";
import SideBar from "./components/SideBar";
import SubAgent from "./routes/SubAgent";
import Navbar from "./components/NavBar";

function App() {
  return (
    <>
      <Router>
        <SideBar/>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/sub_agent" element={<SubAgent/>} />
          <Route path="*" element={'404 NOT FOUND'} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

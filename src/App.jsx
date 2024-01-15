import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <Router>
        <SideBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="*" element={'404 NOT FOUND'} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

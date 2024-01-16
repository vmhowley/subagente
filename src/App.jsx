import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";
import SideBar from "./components/SideBar";
import SubAgent from "./routes/SubAgent";

function App() {
  return (
    <>
      <Router>
        <SideBar/>
        <div className="ml-72">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/sub_agent" element={<SubAgent/>} />
          <Route path="*" element={'404 NOT FOUND'} />
        </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

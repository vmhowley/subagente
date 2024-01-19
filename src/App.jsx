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
        <div className="bg-gradient-to-t from-black to-red-800 w-full h-80 absolute top-0 left-0 z-0 "></div>
        <SideBar/>
        <Navbar />
        <div className="xl:pl-72 w-full p-6">
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

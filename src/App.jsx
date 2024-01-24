import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";
import SideBar from "./components/SideBar";
import SubAgent from "./routes/SubAgent";
import Navbar from "./components/NavBar";
import { BarSide } from "./components/BarSide";

function App() {

  return (
    <>
      <Router>
        <div className="bg-gradient-radial dark:to-slate-900 dark:from-slate-900 to-black via-red-950 from-red-800 w-full h-96 absolute top-0 left-0  opacity-95"></div>
        <Navbar />
        <BarSide/>
        <div className="xl:pl-72 w-full pr-2 ">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/sub_agent' element={<SubAgent/>} />
          <Route path='*' element={<h1 className="flex relative">Hola</h1> } />
        </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";
import SideBar from "./components/SideBar";
import PucharseWithdrawal from "./routes/PucharseWithdrawal";
import Navbar from "./components/NavBar";
import { BarSide } from "./components/BarSide";
import PagoTc from "./routes/PagoTc";

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <BarSide/>
        <div className="xl:pl-72 w-full pr-2 ">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/tc_payment' element={<PagoTc/>} />
          <Route path='/pucharse_withdrawal' element={<PucharseWithdrawal/>} />
          <Route path='*' element={<h1 className="flex relative">Hola</h1> } />
        </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

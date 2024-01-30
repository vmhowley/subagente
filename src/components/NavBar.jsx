import React from "react";
import { useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  let Location;
  if (location.pathname == "/") {
    Location = "Dashboard";
  } else {
    if (location.pathname == "/sub_agent") {
      Location = "Sub Agentes";
    } else {
      if (location.pathname == "/tc_payment") {
        Location = "Pagos de Tarjeta";
      } else {
        if (location.pathname == "/pucharse_withdrawal") {
          Location = "Compras y Retiros";
        }
      }
    }
  }
  return (
    <header className="flex w-screen p-6 ">
      <nav className="flex justify-between  flex-row-reverse xl:flex-row pl-8 xl:pl-0">
        <div className="transition-all sm:translate-x-0  p-2 xl:translate-x-72 z-50 ">
          <div className="flex gap-1">
            <p className="">Pagina </p>
            <h1> /{Location}</h1>
          </div>
          <h1 className="font-bold text-lg">{Location}</h1>
        </div>
        <div className="font-extrabold text-2xl sm:flex  xl:-translate-y-0 overflow-y-auto antialiased transition-opacity duration-500 -translate-x-full   xl:opacity-0 cursor-pointer ">
          &#9776;
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

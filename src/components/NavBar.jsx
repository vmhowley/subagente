import React from "react";
import { useLocation } from "react-router-dom";


function Navbar() {
  const location = useLocation();
  let Location ;
  if (location.pathname == '/')
  {   
    Location = 'Dashboard'; 
  }else{
    if(location.pathname == '/sub_agent'){
      Location = 'Sub Agentes'
    }
  }
  return (
    <header className="flex p-6  w-screen ">
      <nav className="flex justify-between">
        <div className="transition-all  w-screen  sm:translate-x-0 flex-col  xl:translate-x-72 z-50 text-white font-extralight">
          <div className="flex gap-1 ">
            <p className="text-zinc-200">Pages  </p>
            <h1>  /{Location}</h1>
          </div>
          <h1 className="font-bold text-lg">{Location}</h1>
        </div>
        <div className="font-extrabold text-white text-2xl sm:flex  xl:-translate-y-0 overflow-y-auto antialiased transition-opacity duration-500 -translate-x-full   xl:opacity-0 cursor-pointer ">
          &#9776;
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

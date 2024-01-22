import React from "react";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
function Hero() {
  return (
    <div className=" relative gap-3 grid sm:grid-cols-2 xl:flex justify-around">
      <div className=" p-4 bg-white h-[125px] w-60 sm:w-96 rounded-xl flex flex-col justify-center relative">
        <h1 className="text-neutral-500 font-semibold text-sm">TODAY'S MONEY</h1>
        <h1 className="font-bold text-xl">$53,000</h1>
        <div className="flex flex- gap-1">
          <p className="text-green-500 font-bold">+55%</p>
          <p className="text-neutral-500 ">since yesterday</p>
        </div>
        <div className="flex absolute right-4 bottom-14  rounded-full bg-gradient-to-tl from-[#5e72e4] to-[#825ee4]     items-center w-14 h-14 justify-center">
          <LocalAtmIcon sx={{ color: "white" }} className="" />
        </div>
      </div>
      <div className=" p-4 bg-white h-[125px] w-60 sm:w-96 rounded-xl flex flex-col justify-center relative">
        <h1 className="text-neutral-500 font-semibold">TODAY'S USERS</h1>
        <h1 className="font-bold text-xl">3,100</h1>
        <div className="flex flex- gap-1">
          <p className="text-green-500 font-bold">+5%</p>
          <p className="text-neutral-500 ">since last week</p>
        </div>
        <div className="flex absolute right-4 bottom-14  rounded-full bg-gradient-to-tl from-[#5e72e4] to-[#825ee4]     items-center w-14 h-14 justify-center">
          <LocalAtmIcon sx={{ color: "white" }} className="" />
        </div>
      </div>
      <div className=" p-4 bg-white h-[125px] w-60 sm:w-96 rounded-xl flex flex-col justify-center relative">
        <h1 className="text-neutral-500 font-semibold">NEW CLIENTS</h1>
        <h1 className="font-bold text-xl">+100</h1>
        <div className="flex flex- gap-1">
          <p className="text-green-500 font-bold">-2%</p>
          <p className="text-neutral-500 ">since last quarter</p>
        </div>
        <div className="flex absolute right-4 bottom-14  rounded-full bg-gradient-to-tl from-[#5e72e4] to-[#825ee4]     items-center w-14 h-14 justify-center">
          <LocalAtmIcon sx={{ color: "white" }} className="" />
        </div>
      </div>
      <div className=" p-4 bg-white h-[125px] w-60 sm:w-96 rounded-xl flex flex-col justify-center relative">
        <h1 className="text-neutral-500 font-semibold">TODAY'S USERS</h1>
        <h1 className="font-bold text-xl">3,200</h1>
        <div className="flex flex- gap-1">
          <p className="text-green-500 font-bold">+5%</p>
          <p className="text-neutral-500 ">since last week</p>
        </div>
      </div>
      <div className="flex absolute right-4 bottom-14  rounded-full bg-gradient-to-tl from-[#5e72e4] to-[#825ee4]     items-center w-14 h-14 justify-center">
        <LocalAtmIcon sx={{ color: "white" }} className="" />
      </div>
    </div>
  );
}

export default Hero;

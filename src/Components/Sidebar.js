import React, { useState } from "react";
import control from "../assets/AsideImage/control.png";
import logo from "../assets/AsideImage/logo.png";
import Chart_fill from "../assets/AsideImage/Chart_fill.png";
import Chart from "../assets/AsideImage/Chart.png";
import User from "../assets/AsideImage/User.png";
import Calendar from "../assets/AsideImage/Calendar.png";
import Search from "../assets/AsideImage/Search.png";
import Folder from "../assets/AsideImage/Folder.png";
import Setting from "../assets/AsideImage/Setting.png";
import Chat from "../assets/AsideImage/Chat.png";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const Menus = [
    { title: "Dashboard", src: Chart_fill },
    { title: "Inbox", src: Chat },
    { title: "Accounts", src: User, gap: true },
    { title: "Schedule ", src: Calendar },
    { title: "Search", src: Search },
    { title: "Analytics", src: Chart },
    { title: "Files ", src: Folder, gap: true },
    { title: "Setting", src: Setting },
  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20"
        } bg-purple-700 h-screen p-5  pt-8 relative duration-500`}
      >
        <img
          src={control}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
         border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
          alt=""
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={logo}
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
            alt=""
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Designer
          </h1>
        </div>

        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              onMouseOver={() => setOpen(true)}
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
            ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"} `}
            >
              <img src={Menu.src} alt="side bar menu img" />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className={`h-screen flex-1 p-7 ${open && "z-10"}`}>
        <h1 className="text-2xl font-semibold ">Home Page</h1>
      </div>
    </div>
  );
};

export default Sidebar;

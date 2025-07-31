import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="bg-white h-[5rem] ">
      <div className="text-blue-800 font-bold flex ml-[62rem] pt-[1.8rem] gap-[2rem]">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/aboutUs">About Us</NavLink>
        <NavLink to="/contactUs">Contact Us</NavLink>
        <NavLink to="/login">Login</NavLink>
      </div>
    </div>
  );
};

export default Header;

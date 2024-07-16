import React from "react";
import { Link } from "react-router-dom";
import OpenButton from "./openButton";

const Header = () => {
 
  return (
    <>
      <header className="w-full h-20 bg-black text-white z-0 ">
        <nav className="flex justify-between items-center px-10 h-full">
          <ul className="flex gap-10 justify-center items-center text-xl font-bold ">
            <Link to="/">Home</Link>

            <Link to="/about">About Us</Link>

            <Link to="/activity">Activity</Link>

            <Link to="/blog">Blog</Link>
          </ul>
         <OpenButton />
        </nav>
         
      </header>
    </>
  );
};

export default Header;

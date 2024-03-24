import React from "react";

import logo from '../assets/Logo.png'
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="border border-green-300">
      <div className="navbar">
        <div className="flex-1">
          <Link to={`/`} className=" cursor-pointer  hover:bg-transparent bg-transparent text-xl">
            <img className="w-[200px]" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink className='bg-white active:bg-white' to={'/'}>Home</NavLink>
            </li>
            <li>
              <NavLink className='bg-white active:bg-white' to={`/donation`}>Donation</NavLink>
            </li>
            <li>
                <NavLink className='bg-white active:bg-white' to={`/statistics`}>Statistics</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

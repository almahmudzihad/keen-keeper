import React from "react";
import { NavLink } from "react-router";
import "../../index.css";

function Navbar() {
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar container mx-auto px-4">
        
        
        <div className="flex-1">
          <a className="text-2xl font-bold text-cyan-600">
            <span className="text-cyan-800">Keen</span>Keeper
          </a>
        </div>

        
        <div className="flex-none lg:hidden">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost">
              ☰
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/status">Status</NavLink>
              </li>
              <li>
                <NavLink to="/timeline">Timeline</NavLink>
              </li>
            </ul>
          </div>
        </div>

        
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-2">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/status">Status</NavLink>
            </li>
            <li>
              <NavLink to="/timeline">Timeline</NavLink>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Navbar;

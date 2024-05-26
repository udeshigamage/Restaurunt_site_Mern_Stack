import React, { useEffect, useState } from "react";
import th from "/th.jpg";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
const Navbar = () => {
  const [isSticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.screenY;
      if (offset > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="navbar bg-slate-100 fixed top-0 right-0 left-0  ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a href="/">
          <img src={th} className="w-20" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <details>
              <summary>Menu</summary>
              <ul className="p-2">
                <li>
                  <a>All</a>
                </li>
                <li>
                  <a>Sallad</a>
                </li>
                <li>
                  <a>Pizza</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Service</summary>
              <ul className="p-2">
                <li>
                  <a>Online Order</a>
                </li>
                <li>
                  <a>Table Booking</a>
                </li>
                <li>
                  <a>Order Tracking</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Offers</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn ">
          <FaSearch />
        </a>
        <a className="btn mr-3 ml-3">
          <FaShoppingCart />
        </a>
        <a className="btn bg-gray-500 px-6 rounded-full gap-2 mr-3 ">
          <IoCall />
          contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;

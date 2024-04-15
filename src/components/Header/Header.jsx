import React, { useEffect, useRef, useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineDashboard } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { VscGraph } from "react-icons/vsc";

const Header = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSignOut = () => {
    sessionStorage.setItem("isLoggedIn", "false");
    // You may want to perform additional sign-out related tasks here
    navigate("/signin"); // Redirect to sign-in page after sign out
  };

  return (
    <div className="sticky top-0">
      <nav className="bg-white border-gray-200  shadow-sm border-b font-poppins ">
        <div className="w-full flex flex-wrap justify-end items-center p-4 mx-auto max-[400px]:text-xs">
          <div className="flex flex-shrink-0 items-center space-x-4 text-black ml-3">
            <div className="text-2  xl font-light cursor-pointer hover:scale-110 duration-200">
              <Link to="/">
                <VscGraph />
              </Link>
            </div>
            <div className="text-2xl cursor-pointer hover:rotate-90 duration-500 max-[400px]:text-xs">
              <Link to="/settings">
                <IoSettingsOutline />
              </Link>
            </div>
            <div className="flex flex-col items-end ">
              <div className="text-md font-medium ">
                <i className="fa-solid fa-gear"></i>Nandha Kumar
              </div>
            </div>
            <button onClick={() => setOpen((open) => !open)}>
              <img
                src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true&name=Nandha"
                alt="user"
                className="w-10 h-10 rounded-full hover:scale-105 duration-150 max-[400px]:w-5 max-[400px]:h-5"
              />
            </button>
          </div>
          <div id="dropdown" ref={dropdownRef} className="flex flex-col">
            {open && (
              <div className="absolute right-0 mt-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 ">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  <li>
                    <Link
                      to="/"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/settings"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Settings
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Earnings
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleSignOut}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Sign Out
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

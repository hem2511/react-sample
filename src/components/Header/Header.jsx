import React, { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0">
      <nav className="bg-white border-gray-200  shadow-sm border-b font-poppins ">
        <div className="w-full flex flex-wrap justify-end items-center p-4 mx-auto">
          <div className="flex flex-shrink-0 items-center space-x-4 text-black ml-3">
            <div className="text-2xl cursor-pointer hover:rotate-90 duration-500">
              <IoSettingsOutline />
            </div>
            <div className="flex flex-col items-end ">
              <div className="text-md font-medium ">
                <i class="fa-solid fa-gear"></i>Nandha Kumar
              </div>
            </div>
            <button onClick={() => setOpen((open) => !open)}>
              <img
                src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true&name=Nandha"
                alt="user"
                className="w-10 h-10 rounded-full hover:scale-105 duration-150"
              />
            </button>
          </div>
          <div className="flex flex-col">
            {open && (
              <div className="absolute right-0 mt-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Earnings
                    </a>
                  </li>
                  <li>
                    <Link
                      to="/signin"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Sign Out
                    </Link>
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

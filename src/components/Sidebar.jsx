import React, { useState } from "react";
import { SidebarData } from "./SidebarData";
import { BsChevronDown } from "react-icons/bs";
import { MdLogout } from "react-icons/md";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [subMenuOpen, setSubMenuOpen] = useState({});
  const toggleSubMenu = (index) => {
    setSubMenuOpen((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <aside
      className={`${
        open
          ? "w-72 transition-all duration-500"
          : " w-0 lg:w-20 transition-all duration-500"
      } bg-white border-r shadow-sm fixed lg:relative  top-0 bottom-0 z-50 ${
        open ? "overflow-y-auto" : ""
      }`}
    >
      <nav className="h-full flex flex-col bg-white border-r shadow-sm ">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src="https://img.logoipsum.com/297.svg"
            className={`${!open && "hidden"}`}
            alt="logo"
          />
          <button
            onClick={() => setOpen((open) => !open)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                />
              </svg>
            )}
          </button>
        </div>

        <ul className="flex-1 px-3 transition-all duration-500">
          {SidebarData.map((menu, index) => {
            return (
              <React.Fragment key={index}>
                <li
                  className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-all group  
                                    ${
                                      menu.active
                                        ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
                                        : "hover:bg-indigo-50 text-gray-600"
                                    }
                                    ${!open && "hidden lg:block"} 
                                    ${menu.gap ? "mt-9" : "mt-2"}`}
                >
                  {menu.icon}
                  <span
                    className={`overflow-hidden transition-all ml-3 w-52 ${
                      !open && "hidden "
                    }`}
                  >
                    {menu.title}
                  </span>
                  {menu.subMenu && (
                    <BsChevronDown
                      onClick={() => toggleSubMenu(index)}
                      className={`${
                        subMenuOpen[index] && "rotate-180 duration-500"
                      } ${!open && "hidden "} transition-all duration-500`}
                      size={20}
                    />
                  )}
                  {!open && (
                    <div
                      className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm
                                            invisible opacity-20 -translate-x-3 transition-all  group-hover:visible group-hover:opacity-100 group-hover:translate-x-0 `}
                    >
                      {menu.title}
                    </div>
                  )}
                </li>
                {menu.subMenu && open && subMenuOpen[index] && (
                  <ul className="transition-all duration-500">
                    {menu.subNav.map((subMenuItem, idx) => (
                      <li
                        key={idx}
                        className={`flex items-center py-2 px-12 my-1 font-medium rounded-md cursor-pointer transition-all duration-500 group hover:bg-indigo-50 text-gray-600 `}
                      >
                        {subMenuItem.icon}
                        <span className={`transition-all ml-1`}>
                          {subMenuItem.title}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </React.Fragment>
            );
          })}
        </ul>
        <div className="border-t flex p-3">
          <div className={`px-2 ${!open && "hidden lg:block"} `}>
            {" "}
            <MdLogout size={25} />{" "}
          </div>
          <div
            className={`flex justify-between items-center overflow-hidden transition-all w-52 ml-3  text-gray-600 ${
              !open && "hidden"
            }`}
          >
            <span className="font-medium ">Logout</span>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;

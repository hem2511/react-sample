import React, { useState } from 'react'
import {
    MdOutlineDashboard,
    MdAccountCircle,
    MdAnalytics,
    MdOutlineSettings,
    MdLogout,
    MdOutlineForwardToInbox,
    MdAccountBalance,
    MdCalendarMonth,
    MdSearch,
    MdFileCopy,
    MdSettings,
} from 'react-icons/md';
import {
    BsChevronDown,
    BsChatLeftText,
    BsCalendarCheck,
    BsFiles,
    BsServer,
} from 'react-icons/bs';

import {
    IoMdAnalytics,
} from 'react-icons/io'

const NavSidebar = () => {
    const [open, setOpen] = useState(true);
    const [subMenuOpen,setSubMenuOpen] = useState({});
    const toggleSubMenu = (index) => {
        setSubMenuOpen((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    }
    
    const Menus = [
        { title: "Dashboard", icon: <MdOutlineDashboard size={25} />, alert: true, active: true },
        { title: "Inbox", icon: <MdOutlineForwardToInbox size={25} /> },
        { title: "Accounts", icon: <MdAccountBalance size={25} />, gap: true },
        { title: "Schedule ", icon: <MdCalendarMonth size={25} /> ,
        subMenus:[
            {
                title:"Schedule 1",  
                icon: <MdCalendarMonth size={25} />               
            },
            {
                title:"Schedule 2",          
                icon: <MdCalendarMonth size={25} />       
            },
        ],
        isOpen:true
    },
        { title: "Acc ", icon: <MdCalendarMonth size={25} /> ,
        subMenus:[
            {
                title:"Acc 1",  
                icon: <MdCalendarMonth size={25} />               
            },
            {
                title:"Acc 2",          
                icon: <MdCalendarMonth size={25} />       
            },
        ],
        isOpen:true
    },
        { title: "Search", icon: <MdSearch size={25} /> },
        { title: "Analytics", icon: <IoMdAnalytics size={25} />, active: true },
        { title: "Files ", icon: <MdFileCopy size={25} />, gap: true },
        { title: "Setting", icon: <MdSettings size={25} /> },
    ];
    const setSubMenu = (index) => {
        setDropDown((prevMenus) =>
            prevMenus.map((menu,i) =>{
                if(i===index){
                    console.log(menu.isOpen)
                    return {...menu,isOpen: !menu.isOpen};
                }
                return menu;
            })
        );
    };
    const [dropDown, setDropDown] = useState(Menus);
    return (
        <div className='h-screen flex font-poppins'>
            <aside className={`${open ? "w-72" : " w-0 lg:w-20 "} bg-white border-r shadow-sm fixed lg:relative  top-0 bottom-0 z-50`}>
                <nav className='h-full flex flex-col bg-white border-r shadow-sm'>
                    <div className='p-4 pb-2 flex justify-between items-center'>
                        <img
                            src='https://img.logoipsum.com/297.svg'
                            className={`${!open && "hidden"}`}
                            alt='logo'
                        />
                        <button
                            onClick={() => setOpen((open) => !open)}
                            className='p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100'
                        >
                            {open
                                ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
                                </svg>
                                : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                                </svg>
                            }
                        </button>
                    </div>

                    <ul className='flex-1 px-3'>
                        {Menus.map((menu, index) => (
                            <>
                            <li
                                key={index}
                                className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group 
                                ${menu.active 
                                    ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
                                    : "hover:bg-indigo-50 text-gray-600"
                                }
                                ${!open && "hidden lg:block"} 
                                ${menu.gap ? "mt-9" : "mt-2"}`}
                            >
                                {menu.icon}
                                <span className={`overflow-hidden transition-all ml-3 w-52 ${!open && "hidden"}`}>
                                    {menu.title}
                                </span>
                                {menu.subMenus && (
                                    <BsChevronDown
                                        // onClick={() =>setSubMenu(index)}
                                        // onClick={() => setSubMenuOpen(!subMenuOpen)}
                                        onClick={() => toggleSubMenu(index)}
                                        // className={`${menu.isOpen && "rotate-180"}`}
                                        className={`${subMenuOpen[index] && "rotate-180"}`}
                                    />
                                )}

                                {menu.alert && (
                                    <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${open ? "" : "top-2"}`}></div>
                                )}
                                {!open && (
                                    <div
                                        className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm
                                        invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>
                                    {menu.title}
                                    </div>
                                )}
                                
                            </li>
                            {/* {menu.subMenus && menu.isOpen && open && (
                                    <ul>
                                        {menu.subMenus.map((submenuItem,idx) => (
                                            <li
                                                key={idx}
                                                className={`flex items-center py-2 px-12 my-1 font-medium rounded-md cursor-pointer transition-colors group hover:bg-indigo-50 text-gray-600 `}                                                
                                            >
                                                {submenuItem.icon}
                                                <span className={`transition-all ml-1`}>{submenuItem.title}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )} */}
                                {menu.subMenus && open && subMenuOpen[index] &&(
                                    <ul>
                                        {menu.subMenus.map((subMenuItem,idx) => (
                                            <li>
                                                {subMenuItem.icon}
                                                {subMenuItem.title}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                </>
                        ))}
                    </ul>

                    <div className='border-t flex p-3'>
                        <img
                            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
                            alt='user'
                            className='w-10 h-10 rounded-md'
                        />
                        <div className={`flex justify-between items-center overflow-hidden transition-all w-52 ml-3  ${!open && "hidden"}`}>
                            <div className='leading-4'>
                                <h4 className='font-semibold'>User Name</h4>
                                <span className='text-xs text-gray-600'>username@gmail.com</span>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                            </svg>
                        </div>
                    </div>
                </nav>
            </aside>
            <main className='flex-1'>
                <h1 className="text-2xl font-semibold ">Home Page </h1>
            </main>
        </div>
    )
}

export default NavSidebar
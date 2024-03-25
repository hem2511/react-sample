import React, { useState } from 'react'
import { HiChevronLeft } from "react-icons/hi";
import { HiPlay } from "react-icons/hi";


const NewSideBar = () => {
    const [open, setOpen] = useState(true);
    const Menus = [
        { title: "Dashboard", icon: HiPlay },
        { title: "Inbox", icon: HiPlay },
        { title: "Accounts", icon: HiPlay, gap: true },
        { title: "Schedule ", icon: HiPlay },
        { title: "Search", icon: HiPlay },
        { title: "Analytics", icon: HiPlay },
        { title: "Files ", icon: HiPlay, gap: true },
        { title: "Setting", icon: HiPlay },
    ];
    return (
        <div className='flex font-poppins'>
            
            <aside className={`${open ? "w-72" : "w-20"} bg-slate-300 h-screen p-5 pt-8 relative duration-300`}>
                <HiChevronLeft
                    size={25}
                    className={` absolute cursor-pointer -right-3 top-9 w-7 border-2 rounded-full ${!open && "rotate-180"}`}
                    onClick={() => setOpen(!open)}                    
                />
            <div className='flex gap-x-4 items-center'>    
                <img
                        src='https://img.logoipsum.com/281.svg'
                        className='cursor-pointer duration-500'
                        alt='logo'
                    />
                <h1 className={`text-white origin-left font-bold text-xl duration-200 ${!open && "scale-0"}`}>Coder</h1>
            </div>
           <ul className='pt-6'>
                {Menus.map((menu,index) => (
                    <li
                        key={index}
                        className={`relative flex rounded-md p-2 cursor-pointer hover:bg-blue-300 text-black items-center gap-x-4 ${menu.gap ? "mt-9":"mt-2"} ${index === 0 && "bg-light-white"}`}    
                    >
                        <span><menu.icon/></span>
                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                            {menu.title}
                        </span>
                        {!open && (
                            <div
                            className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm
                            invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
                        >
                             {menu.title}
                        </div>
                        )}
                    </li>
                ))}
           </ul>

            </aside>
            <div className='h-screen flex-1 relative'>
                {/* <header className='bg-blue-700 h-16'></header> */}
                <main className='p-7'>Dashboard</main>
            </div>
        </div>
    )
}

export default NewSideBar
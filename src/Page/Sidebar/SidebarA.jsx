import React, { useState } from 'react'
import arrow from '../../assets/arrow-left-solid.svg'
import dashboard from '../../assets/gauge-solid.svg'
import inbox from '../../assets/inbox-solid.svg'
import account from '../../assets/user-solid.svg'
import Schedule from '../../assets/calendar-solid.svg'
import search from '../../assets/magnifying-glass-solid.svg'
import analytics from '../../assets/chart-line-solid.svg'
import file from '../../assets/file-solid.svg'
import setting from '../../assets/gear-solid.svg'

const SidebarA = () => {
    const [open, setOpen] = useState(true);
    const Menus = [
        { title: "Dashboard", icon: dashboard },
        { title: "Inbox", icon: inbox },
        { title: "Accounts", icon: account, gap: true },
        { title: "Schedule ", icon: Schedule },
        { title: "Search", icon: search },
        { title: "Analytics", icon: analytics },
        { title: "Files ", icon: file, gap: true },
        { title: "Setting", icon: setting },
    ];
    return (
        <div className='flex '>
            <aside className={`${open ? "w-72" : "w-20"} bg-blue-600 h-screen p-5 pt-8 relative md:fixed duration-300`}>
                <img
                    src={arrow}
                    className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple border-2 rounded-full  
                    ${!open && "rotate-180"}`}
                    onClick={() => setOpen(!open)}
                />
                <div className="flex gap-x-4 items-center">
                    <img
                        src='https://img.logoipsum.com/281.svg'
                        className='cursor-pointer duration-500'
                        alt='logo'
                    />
                    <h1 className={`text-yellow-200 origin-left font-bold text-xl duration-200 ${!open && "hidden"}`}>
                    {/* <h1 className={`text-white origin-left font-bold text-xl duration-200 ${!open && "scale-0"}`}> */}
                        Brand Name
                    </h1>
                    {/* <img src='https://img.logoipsum.com/281.svg' className={`cursor-pointer duration-500 ${!open && "scale-0"}`}alt='logo'/> */}
                </div>
                <ul className='pt-6'>
                    {Menus.map((Menu, index) => (
                        <li
                            key={index}
                            className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-xl font-normal items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"
                                } `}
                        >
                            <img src={Menu.icon} className='text-gray-50' />
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                {Menu.title}
                            </span>
                        </li>
                    ))}
                </ul>
            </aside>
            <main className="h-screen flex-1 p-7">
                <h1 className="text-2xl font-semibold ">Home Page Home Page Home Page</h1>
            </main>
        </div>
    )
}


export default SidebarA

{/* <div flex h-screen overflow-hidden>
<aside></aside>
<div>
<header sticky></header>
<main></main>
</div>
</div> */}

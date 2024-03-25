import React from 'react'
import { useState } from 'react'
import { SidebarContext } from './SidebarContext'
import Header from '../LandingPage1/Header'

const Sidebar = ({children}) => {
    const [expanded,setExpanded]=useState(true);
  return (
    <div className='flex font-poppins'>
    <aside className="h-screen">
        <nav className='h-full flex flex-col bg-white border-r shadow-sm'>
            <div className='p-4 pb-2 flex justify-between items-center'>
                <img 
                    src='https://img.logoipsum.com/297.svg'
                    className={`overflow-hidden transition-all ${expanded ? "W-32":"w-0"}`}
                    alt='logo'
                />
                <button 
                    onClick={()=> setExpanded((expanded) => !expanded)}
                    className='p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100'
                >
                    {expanded                         
                        ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
                        </svg>
                        : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                        </svg>
                    }
                </button>
            </div>
            <SidebarContext.Provider value={{expanded}}>
                <ul className='flex-1 px-3'>{children}</ul>
            </SidebarContext.Provider>
            <div className='border-t flex p-3'>
                <img
                    src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
                    alt='user'
                    className='w-10 h-10 rounded-md'
                />
                <div
                    className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-52 ml-3":"w-0"}`}
                >
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
    <div className="h-screen flex-1 p-7">
    <Header/>
        <h1 className="text-2xl font-semibold ">Home Page Home Page</h1>

      </div>
    </div>
  )
}

export default Sidebar

// https://www.youtube.com/watch?v=3pTPcyUJx-Q
// https://www.youtube.com/watch?v=NFrFhBJPTmI&t=8s
// https://gist.github.com/nimone/9204ed6e9d725c0eef003011c9113698
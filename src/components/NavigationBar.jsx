import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { links } from '../data/navbarData';

function NavigationBar({ link }) {
    const [isOpen, setIsOpen] = useState();
    return (
        <nav className='flex bg-yellow-100 pb-3 justify-around'>
            {/* <div className='flex  fixed '> */}
            <div>
                <div className='text-4xl p-3 flex container justify-start'>
                    <div>FurniFlex</div>


                </div>


                <div className='p-3 flex justify-end gap-30  rounded-full mt-3 text-bold container w-100 bg-sandal-200'>
                    <button className='md:hidden justify-end' onClick={() => setIsOpen(!isOpen)}>
                        <span className="block w-6 h-0.5 bg-black"></span>
                        <span className="block w-6 h-0.5 bg-black"></span>
                        <span className="block w-6 h-0.5 bg-black"></span>
                        <span className="block w-6 h-0.5 bg-black"></span>
                        <span className="block w-6 h-0.5 bg-black"></span>
                        <span className="block w-6 h-0.5 bg-black"></span>
                        <span className="block w-6 h-0.5 bg-black"></span>
                        <span className="block w-6 h-0.5 bg-black"></span>
                        <span className="block w-6 h-0.5 bg-black"></span>
                        <span className="block w-6 h-0.5 bg-black"></span>
                        <span className="block w-6 h-0.5 bg-black"></span>
                        <span className="block w-6 h-0.5 bg-black"></span>
                    </button>
                </div>
            </div>
            <div className='p-3 md:hidden flex justify-around gap-30  rounded-full mt-3 text-bold container w-100 bg-sandal-200'>
                {
                    isOpen && (
                        <ul className='md:hidden flex flex-col justify-around gap-3  rounded-full text-bold container w-100 bg-sandal-200' >
                            {links.map((link) => (
                                <li key={link.id}>
                                    <NavLink to={link.url} className={({ isActive }) => isActive ? " font-semibold underline text-xl" : " hover:text-grey-300 text-xl"}>{link.name}</NavLink>
                                </li>
                            ))}
                        </ul>
                    )
                }

            </div>
            <div className='p-3 hidden md:flex  flex justify-around gap-30  rounded-full mt-3 text-bold container w-100 bg-sandal-200'>
                {
                    <ul className='flex justify-around md:gap-10 lg:gap-30 rounded-full text-bold container w-100 bg-sandal-200' >
                        {links.map((link) => (
                            <li key={link.id}>
                                <NavLink to={link.url} className={({ isActive }) => isActive ? " font-semibold underline text-xl" : " hover:text-grey-300 text-xl"}>{link.name}</NavLink>
                            </li>
                        ))}
                    </ul>

                }

            </div>

            <div className='container hidden lg:flex'></div>
            {/* </div> */}
        </nav>
    )
}

export default NavigationBar
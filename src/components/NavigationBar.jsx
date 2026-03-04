import React from 'react'
import {NavLink} from 'react-router-dom'


function NavigationBar() {
    return (
        <div className='flex bg-yellow-100 pb-3 justify-around'>
            {/* <div className='flex  fixed '> */}
                <div className='text-4xl p-3 flex container justify-start'>
                    <div>FurniFlex</div>
                </div>
                <div className='p-3 flex justify-around gap-30  rounded-full mt-3 text-bold container w-100 bg-sandal-200'>
                    <NavLink to="/" className={({isActive})=> isActive? " font-semibold underline text-xl": " hover:text-grey-300 text-xl" }>Home</NavLink>
                    <NavLink to="/about" className={({isActive})=> isActive? "font-semibold underline text-xl": " hover:text-grey-300 text-xl" }>About</NavLink>
                    <NavLink to="/listOfUser" className={({isActive})=> isActive? "font-semibold underline text-xl": " hover:text-grey-700  text-xl" }>User</NavLink>
                </div>
                <div className='container'></div>
            {/* </div> */}
        </div>
    )
}

export default NavigationBar
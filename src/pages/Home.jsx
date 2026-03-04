import React from 'react'

function Home() {
    return (
        <main className='background min-h-screen'>
            <div className=' '>
                <div className='text-center'>
                <h1 className='text-5xl pt-17 pl-15 '>Upgrade today,<span className='text-orange-700'> change tomorrow</span></h1>
                </div>
                <div className='ml-200 w-50 text-center px-2 mt-7  py-4 h-15'>
                    <button className='bg-yellow-100 py-2 border rounded-full px-3 font-semibold text-xl text-center'>Get Started </button> 
                </div>
            </div>
            <div className='flex flex-column pt-15 justify-center items-center'>
                <div>
                    <h1 className='text-center text-3xl text-bold mt'>“<span className='text-purple-700' >Elevate your home</span> without the heavy cost.” </h1>
                    <h5 className='text-center text-xl text-bold m-3'>Rental furniture gives you stylish flexibility without the heavy upfront cost.</h5>
                </div>
            </div>
        </main>
    )
}

export default Home
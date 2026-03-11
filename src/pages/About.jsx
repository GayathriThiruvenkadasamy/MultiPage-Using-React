import React from 'react'
import { review } from './ReviewData'
import { data } from 'react-router-dom'

function About() {
  return (
    <div className='bg-yellow-200 min-h-screen'>
      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
        <div className='mt-20'>
          <h2 className='text-4xl pt-15 pl-15'>Rent, swap, or upgrade furniture as your <span className='text-yellow-700'>needs change</span> </h2>
          <h2 className='mt-15 pl-15'>
            <span className='text-4xl text-orange-800 '>Our Vision</span><span className='text-2xl'> To become the most trusted rental furniture brand, empowering people to live comfortably and sustainably without compromising on design or quality.</span>

          </h2>
          <div className='flex justify-center'>
            <button className='p-2 font-semibold ml-10 mb-10  mt-10 bg-orange-600 rounded-lg'>
              Explore Products
            </button>
            <div className='mt-15 ml-3 flex'>
              <img src='images/favourites.png' className='w-7 h-5' alt='star' /><span>4.5ratings</span>
            </div>
          </div>
        </div>
        <div className='w-100 ml-20   m-5 shadowed-lg'>
          <img src="/images/Table.jpg" alt='table.jpg' className='md:w-75 lg:w-100 h-130 rounded-full transition-transfrom duration-300 hover:scale-110' />
        </div>
      </div>

      <div className='container mt-20 mb-3'>
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
          <div className='text-3xl pl-15 flex justify-center items-center'>
            <h1 className=''>Embrace <span className='text-orange-800'>freedom, convenience, and sustainability</span></h1>
          </div>
          <div>
            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5'>

              <div className=''>
                <div className='mb-15'>
                  <h2 className='text-4xl text-center'>4.5k</h2>
                  <p className='text-l text-center'>Happy Customers</p>
                </div>
                <div>
                  <h2 className='text-4xl text-center'>500+</h2>
                  <p className='text-l text-center'>Tons of Furniture Reused</p>
                </div>
              </div>
              <div className='mb-15'>
                <div className='mb-15'>
                  <h2 className='text-4xl text-center'>20+</h2>
                  <p className='text-l text-center'>Cities Across India</p>
                </div>
                <div>
                  <h2 className='text-4xl text-center'>97%</h2>
                  <p className='text-l text-center'>Positive Feedback</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
      <div className=' container pb-15 ml-15 pr-25'>
        <p className='text-2xl text-center'>
          Redefining the way people experience furniture by offering <span className='text-grey-500'>high-quality, modern, and customizable rental</span> solutions. Our catalog ranges from sleek sofas and ergonomic workstations to cozy beds and dining sets, designed to fit every lifestyle and budget.

        </p>
      </div>
      <div className='container ml-15 mt-15 pb-15 flex justify-center items-center flex-col'>
        <div>
          <h1 className='text-3xl pb-5'><span className='text-orange-800'>Premium designs</span> at prices that fit <span className='text-orange-800'>every budget</span></h1>
        </div>
        <div className=''>
          <p className='text-xl text-center'> Believe that homes should evolve as life changes. </p>
        </div>
        <div className='pt-10'>
          <video src='/images/video.mp4' className='rounded-lg shadow-lg w-[800px]' controls autoPlay={true} loop={true} ></video>
        </div>
      </div>

      <div className=' ml-15 pb-30 container pt-10'>
        <h1 className='text-5xl w-130'>Loved by People around the City</h1>
        <div className='grid grid-cols-2 gap-10 sm:grid-cols-2 mt-5 md:grid-cols-4 lg:grid-cols-6'>
              {
                review.map((data) =>(
                  <div key={data.id} className='pt-10 rounded-lg shadow-lg'>
                      <div className='text-xl font-semibold pb-5 pl-1'>{data.name}</div>
                      <div className='pb-5 pl-1'>{data.rating}</div>
                      <div className='text-lg pb-5 pl-2'>{data.review}</div>
                  </div>
                ))
                }
        </div>

      </div>

    </div>


  )
}

export default About
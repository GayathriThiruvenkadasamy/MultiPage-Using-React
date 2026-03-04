
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

function UserDetail() {

    const [user, setUser] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/users/${id}`)
            .then((response) => {
                setUser(response.data);
                console.log(user)
            }).catch(err => {
                console.log(err);
            })
    }, [id]);

    if (!user) {
        return (

            <div className='min-h-screen bg-yellow-200 flex justify-center items-center text-3xl font-bold'>
                Loading...
            </div>

        )
    }

    return (
        <div className='min-h-screen  bg-yellow-200'>
            <div className='p-10 container'>

                <Link to="/listOfUser" className='mb-5 px-5 py-2 font-semibold text-xl bg-yellow-500  text-center py-2 rounded-lg hover:bg-yellow-600'>Go Back</Link>
                <div className='flex flex-col justify-center'>
                <div className=' w-fit container mt-10  h-auto bg-yellow-100'>

                    <h1 className='text-2xl text-center p-5'> Name: {user?.name?.firstname}{user?.name?.lastname}</h1>
                    <h3 className='text-xl text-center pb-5'>User Name 👤: {user?.username}</h3>
                    <h3 className='text-2xl pl-5 pb-4'>Contact Details 📲:</h3>
                    <div className='grid grid-cols-1  sm:grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2'>
                        <div>
                            {/* <h4 className='text-xl text-center pl-5 pb-5'>Email :</h4> */}
                            <h4 className='text-xl pl-5 pb-5'>Email 📩: {user?.email}</h4>
                            <h4 className='text-xl pl-5 pb-5 '>Street: {user?.address?.street}</h4>
                            <h4 className='text-xl pl-5 pb-5 '>Number: {user?.address?.number}</h4>
                        </div>
                        <div>
                            {/* <h4 className='text-xl text-center pl-5 pb-5'>Email :</h4> */}
                            <h4 className='text-xl pr-5 pb-5'>Contact Number 📞☎️: {user?.phone}</h4>
                            <h4 className='text-xl pr-5 pb-5'>City 📍: {user?.address?.city}</h4>
                            <h4 className='text-xl pr-5 pb-5'>Zipcode 📌: {user?.address?.zipcode}</h4>
                        </div>
                    </div>
                   
                </div>
                </div>
            </div>
        </div>
    )
}

export default UserDetail
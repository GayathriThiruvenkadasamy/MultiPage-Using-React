import { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function ListOfUser() {

  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("https://fakestoreapi.com/users")
      .then((response) => {

        setUser(response.data);
      }).catch((err) => {
        console.log(err);
      })
  }, [])

  if(user.length === 0){
    return(
      <div className='min-h-screen bg-yellow-200 flex justify-center items-center text-3xl font-bold'>
        Loading...
      </div>
    )
  }

  if(user.length>0){
  return (
    
    <div className='bg-yellow-200 min-h-screen'>
      <div className='text-4xl font-bold pt-20 pl-15 pb-10'>
        <h1 className='text-4xl'>Client Details</h1>
      </div>
      {
        user.map(data => (
          <div className='flex gap-5 text-xl pb-5 pl-15 h-30 w-290' key={data.id}>
            <h2 className='text-xl font-semibold text-center p-5 w-70' > {data.name.firstname}{data.name.lastname}</h2>
            <h2 className='text-xl p-5 w-50'>{data.username}</h2>
            <h2 className='text-xl p-5 w-70'>{data.email}</h2>
            <h2 className='text-xl p-5 w-50' >{data.address.city}</h2>
            <button onClick={() => navigate(`/user/${data.id}`)} className='mt-4 mb-5 w-50 h-10 bg-orange-700 hover:bg-orange-800 cursor-pointer rounded-lg shadow-lg text-lg font-bold'>View Details</button><br />
          </div>
        ))
      }

    </div>
  )
  }
}

export default ListOfUser

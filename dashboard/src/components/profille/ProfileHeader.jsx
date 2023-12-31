import React from 'react'
import {FaUser} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logOutUser } from '../../features/users/userSlice'
const ProfileHeader = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {currentUser} = useSelector(store => store.users)
  console.log(currentUser);
  const logouuHandle = ()=>{
      if(currentUser){
        dispatch(logOutUser())
        navigate("/")
      }
  }
  return (
    <div className='h-[60vh] w-full items-center bg-[#fff] lg:mt-4 rounded shadow flex flex-col md:h-[40vh] lg:w-[300px] lg:h-screen'>
        <div className='flex flex-col items-center space-y-3 my-4'>
          <FaUser className='h-32 p-6 w-32 border rounded-full text-[#fff] bg-slate-700'/>
          <h1>{currentUser.userName}</h1>
          <span>{currentUser.userEamil}</span>
        </div>
          <div className='w-40 flex flex-row justify-between my-2 lg:my-4'>
            <Link className='btn hovered'>Setting</Link>
            <button onClick={logouuHandle} className='btn bg-[red]'>Logout</button>
          </div>
        <header className='w-40 flex flex-col space-y-4 my-2 lg:my-4'>
          <Link to='/profile' className='btn hovered'>Account</Link>
          <Link to="/profile/task" className='btn hovered' >Tasks</Link>
        </header>
    </div>
  )
}

export default ProfileHeader
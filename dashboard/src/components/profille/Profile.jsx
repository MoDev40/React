import React from 'react'
import ProfileHeader from './ProfileHeader'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import Tasks from './Tasks'
const Profile = () => {
  const {currentUser} = useSelector(store => store.users)
  return (
    <div className='grid lg:grid-cols-2'>
      <ProfileHeader/>
      <Routes>
        <Route path='/task' element={<Tasks/>}/>
      </Routes>
    </div>
  )
}

export default Profile
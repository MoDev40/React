import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import Login from './components/login/Login'
import Signup from './components/login/Signup'
import Profile from './components/profille/Profile'
import Cars from './components/cars/cars'
import Contact from './components/contact/Contact'
const App = () => {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/profile/*' element={<Profile/>}/>
      <Route path='/singup' element={<Signup/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/cars' element={<Cars/>}/>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </>
  )
}

export default App
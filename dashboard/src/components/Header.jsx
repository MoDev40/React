import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import { useSelector } from 'react-redux'
const Header = () => {
  const [dis,setDis] = useState(false)
  const {currentUser} = useSelector(store => store.users)
  const user = currentUser.userName
  const closeMenu = ()=>{
    setDis(!dis)
  }
  return (
    <div className="w-full space-y-3 p-4 uppercase lg:flex lg:items-center lg:justify-between lg:space-y-0 ">
     <div className="flex justify-between items-center ">
      <Link to='/' className="font-Poppins font-bold lg:font-black text-2xl text-slate-500">Maruti</Link>
      <FaBars onClick={closeMenu} className="h-6 lg:hidden"/>
     </div>
      <div className={`${dis ? 'flex flex-col space-y-4':"hidden"} lg:flex lg:flex-row lg:items-center lg:space-y-0 lg:space-x-3`}>
        <Link onClick={closeMenu} to='/' className='navs'>Home</Link>
        <Link onClick={closeMenu} to="/cars" className='navs'>Cars</Link>
        <Link onClick={closeMenu} to="/about" className='navs'>About</Link>
        <Link onClick={closeMenu} to="/contact" className='navs'>Contact</Link>
        <Link onClick={closeMenu} className='navs lg:bg-[#0f4c0f73] lg:py-1 lg:px-3 lg:text-[#fff]' to={!user ? '/login' : '/profile'}>{!user ? "Login" : "Acoount"}</Link>
      </div>
    </div>
  )
}

export default Header
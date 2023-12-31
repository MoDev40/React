import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [dis,setDis] = useState(false)
  const user = "" 
  const closeMenu = ()=>{
    setDis(!dis)
  }
  return (
    <div className="w-full lg:w-[70%] lg:m-auto space-y-3 p-2 uppercase lg:flex lg:items-center lg:justify-between lg:space-y-0 ">
     <div className="flex justify-between items-center ">
      <Link to='/' className="font-Poppins font-bold lg:font-black text-2xl text-slate-500">notes</Link>
      <button onClick={closeMenu} className="h-6 lg:hidden">Menu</button>
     </div>
      <div className={`${dis ? 'flex flex-col space-y-4':"hidden"} lg:flex lg:flex-row lg:items-center lg:space-y-0 lg:space-x-3`}>
        <Link onClick={closeMenu} to='/' className='navs'>Home</Link>
        <Link onClick={closeMenu} to="/cars" className='navs'>Register</Link>
        <Link onClick={closeMenu} className='navs lg:bg-[#0f4c0f73] lg:py-1 lg:px-3 lg:text-[#fff]' to={!user ? '/login' : '/profile'}>{!user ? "Login" : "Acoount"}</Link>
      </div>
    </div>
  )
}

export default Header
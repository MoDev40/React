import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex  bg-amber-400 p-4 flex-row items-center justify-around text-xl uppercase'>
        <Link className=' font-black text-stone-900' to="/">World Books</Link>
        <div className=' space-x-4'>
        <Link className='bg-slate-700  px-2 text-white rounded' to="/">Books</Link>
        <Link className='bg-slate-700  px-2 text-white rounded' to="addbook">Add Book</Link>
        </div>
    </div>
  )
}

export default Header
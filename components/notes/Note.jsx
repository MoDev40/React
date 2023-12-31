import React from 'react'

const Note = () => {
  const note = {
    name:"Going Gym",
    content:"amakkahakab"
  } 
  return (
    <div className='flex flex-row w-full bg-white shadow-sm p-2 rounded capitalize justify-between lg:w-[50%] lg:m-auto'>
        <div>
            <span>{note.name}</span>
        </div>
            <span>{note.content}</span>
        <div className='space-x-8'>
            <button>edit</button>
            <button className='w-8 h-8 rounded-full text-white font-extrabold hover:bg-slate-500 bg-red-500'>&times;</button>
        </div>
    </div>
  )
}

export default Note
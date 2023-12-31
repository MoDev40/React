import React from 'react'
import Addnote from './notes/Addnote'
import Note from './notes/Note'

const Home = () => {
  return (
    <div className='flex flex-col'>
        <Addnote/>
        <Note/>
    </div>
  )
}

export default Home
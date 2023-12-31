import React from 'react'

const Subscripe = () => {
  return (
    <div className='w-full flex flex-col my-8 capitalize items-center justify-center space-y-2 p-6'>
      <span className='text-[#333333bb]'>-get Our news</span>
      <h1 className='font-bold text-lg lg:text-2xl text-center '>subscripe to get our latest notifications</h1>
      <span className='text-[#333333bb]'>get 15% off on your first Subscribe</span>
      <form  onSubmit={(e)=>e.preventDefault()} action="#" className='flex flex-row'>
        <input type="text" placeholder='Email' className="border-[#ccc]   border outline-none px-2 py-1 lg:py-2 lg:px-4"/>
        <button className=' px-2 bg-[#09370983] text-[#fff] hover:bg-slate-500 py-1 lg:py-2 lg:px-4 '>Subscribe</button>
      </form>
    </div>
  )
}

export default Subscripe
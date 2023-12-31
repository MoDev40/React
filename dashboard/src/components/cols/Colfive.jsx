import React, { useState } from 'react'
import faqs from '../../assets/faq.json'
import Faq from './Faq'
const Colfive = () => {
  return (
    <div className="w-full  flex flex-col space-y-4  lg:flex-row-reverse justify-around  capitalize p-8 lg:p-12 bg-[#cccccc7d]">
     <div className='flex flex-col items-center w-full'>
        <span className='text-[#333333bb] font-light'>-Faqs</span>
        <h1 className='font-bold text-xl lg:text-3xl'>Questions? look here</h1>
     </div>
     <div className='w-full space-y-4'>
      {
        faqs.map( faq => (
            <Faq key={faq.Ques} faq={faq}/>
        ))
      }
     </div>
    </div>
  )
}

export default Colfive
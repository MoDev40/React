import React, { useState } from 'react'
import {FaArrowDown,FaArrowUp} from 'react-icons/fa'
const Faq = ({faq}) => {
    const [view,setView] = useState(false)
    const handleClick = ()=>{
        setView(!view)
    }
  return (
    <div>
        <div className='flex flex-row w-full items-center capitalize justify-between px-2 py-4 bg-[#fff]'>
            <span className='text-sm lg:text-lg font-semibold'>{faq.Ques}</span>
            {
                view ? <FaArrowUp onClick={handleClick}/> : <FaArrowDown onClick={handleClick}/>
            }
        </div>
        <p className={`${view ? '' : "hidden"} bg-[#444054] text-[#fff4e4]  p-2 lg:p-4 leading-normal  md:leading-loose`}>{faq.Ans}</p>
    </div>
  )
}

export default Faq
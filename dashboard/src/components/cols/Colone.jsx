import React from 'react'
import {FaPlay} from 'react-icons/fa'
const Colone = () => {
  return (
    <div className="grid grid-cols-1 w-full h-full  md:h-screen md:mt-0 bg-[#cccccc7d] md:grid-cols-2">
        <div className="flex flex-col p-6 m-6 justify-center ">
         <div>
            <h1 className="w-[95%] text-[1.7rem] font-bold capitalize md:w-[90%] lg:w-[60%]">
                Make your intirior minimalist & modren
            </h1>
            <p className="mt-3 text-sm text-[#333333bb]">Lorem ipsum dolor sit, odit nemo. Nisi incidunt et, consequuntur, nesciunt repudiandae ab ipsa tempore non aperiam assumenda magni?
            Iste perferendis minima natus magnam!</p>
         </div>
        <div className="flex flex-row space-x-5 items-center mt-9">
            <button className="font-light  text-[#fff] px-2 py-1 bg-[#0f4c0f73] rounded-full md:px-3">Get Start</button>
            <button className="flex flex-row items-center justify-center p-1 rounded-full  shadow opacity-1 md:px-2"><FaPlay className="w-[30px] p-[10px] h-[30px] mr-2 rounded-full bg-[#fff]"/> Watch Video</button>
        </div>
        <div className="flex flex-row mt-8 space-x-6">
            <div className="itemsCon">
                <h1 className="heading">450+</h1>
                <p className="info">cars</p>
            </div>
            <div className="itemsCon">
                <h1 className="heading">15k+</h1>
                <p className="info">Customers</p>
            </div>
            <div className="itemsCon">
                <h1 className="heading">4.7+</h1>
                <p className="info">Review</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Colone
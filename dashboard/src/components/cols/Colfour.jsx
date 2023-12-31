import React from 'react'
import topRated from '../../assets/store.json'
import {FaStar} from 'react-icons/fa'
const Colfour = () => {
  return (
    <div className="w-full  flex flex-col capitalize text-center items-center">
        <span className='text-[#333333bb] font-normal text-sm'>-Top rated</span>
        <h1 className='font-semibold text-xl md:text-3xl'>Our top rated cars</h1>
        <div className='grid grid-cols-1 gap-2 my-4 md:grid-cols-2'>
          {
            topRated.map( top =>{
              if(top.rate.charAt(0)==="8" || top.rate.includes("7.8") || top.rate.includes("7.9")){
                return<div key={top.id} className='relative w-[350px] lg:p-2 h-full bg-[#fff]  rounded-xl shadow lg:w-[500px]'>
                  <img className='w-40' src={top.imgUrl}/>
                  <div className='flex justify-around lg:text-xl font-light'>
                    <span>{top.name}</span>
                    <span>${top.price}</span>
                  </div>
                  <div className='absolute top-0 right-0 rounded bg-[#09370983] px-2 flex space-x-1 text-center items-center'>
                    <FaStar className='text-[gold] w-4 h-4'/>
                    <span className='text-[#ccc]'>{top.rate}</span>
                  </div>
                </div>
              }
            })
          }
        </div>
        <button className='btn capitalize my-4 rounded-lg py-2 px-3 lg:my-8 hover:bg-slate-500'>View more!</button>
    </div>
  )
}

export default Colfour
import React from 'react'
import {FaStar} from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { rentCar } from '../../features/userTasks/tasksSlice'
const Car = ({car}) => {
  const dispatch = useDispatch()
  return (
    <div className='bg-[#fff] rounded-2xl shadow'>
        <div className='w-[300px] object-contain'>
                <img src={car.imgUrl} alt="img" />
                <div className=' flex flex-row justify-around font-semibold text-sm border-b border-b-[#ccc]'>
                    <span>{car.name}</span>
                    <span>${car.price}</span>
                </div>
        </div>
        <div className='flex flex-row justify-between px-3 py-1 border-b border-b[#ccc]'>
            <div  className='flex flex-row items-center justify-center  space-x-2 '>
            <FaStar className="text-lg text-[gold]"/>
            <span className='font-bold text-xl'>{car.rate} </span>
            </div>
            <span className='font-bold text-md'>{car.Fueltype}</span>
        </div>
        <button onClick={()=> dispatch(rentCar())} className='btn w-full rounded-none capitalize text-md font-extrabold'>Book</button>
    </div>
  )
}

export default Car
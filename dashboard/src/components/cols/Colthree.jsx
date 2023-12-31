import React from 'react'
import {GoArrowUpRight} from 'react-icons/go'
const Colthree = () => {
  return (
    <div className="w-full  p-6 mt-8 mb-8 lg:h-screen bg-[#cccccc7d] capitalize items-center text-center">
        <span className="text-[#333333bb] font-normal text-sm">-Category</span>
        <h1 className="font-semibold text-xl md:text-3xl">Discover our unique cars</h1>
        <div className="grid grid-cols-1 grid-rows-2 mt-6 items-center place-items-center gap-2 md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-[url(./images/Eeco.JPG)] bg-contain bg-no-repeat bg-[#fff] bg-center w-full h-[30vh] rounded">
            <span className=" float-left font-semibold   rounded-full px-3 py-1 capitalize">Vans</span>
            <span className=" float-right bg-[#fff] font-semibold shadow  rounded-full px-3 py-1 cursor-pointer"><GoArrowUpRight/></span>
          </div>
          <div className="bg-[url(./images/dzire.JPG)] bg-contain bg-no-repeat bg-[#fff] bg-center w-full h-[30vh] rounded">
          <span className=" float-left font-semibold   rounded-full px-3 py-1 capitalize">Personal & Family</span>
            <span className=" float-right bg-[#fff] font-semibold shadow  rounded-full px-3 py-1 cursor-pointer"><GoArrowUpRight/></span>
          </div>
          <div className="bg-[url(./images/swift.JPG)] bg-contain bg-no-repeat bg-[#fff] bg-center w-full h-[30vh] rounded lg:h-full lg:col-span-2 lg:row-span-2">
          <span className=" float-left font-semibold   rounded-full px-3 py-1 capitalize">Single cars</span>
            <span className=" float-right bg-[#fff] font-semibold shadow  rounded-full px-3 py-1 cursor-pointer"><GoArrowUpRight/></span>
          </div>
          <div className="w-full bg-[url(./images/ignis.JPG)]  bg-contain bg-no-repeat bg-[#fff] bg-center lg:h-full h-[30vh] rounded lg:col-span-2">
          <span className=" float-left font-semibold   rounded-full px-3 py-1 capitalize">Offroad</span>
            <span className=" float-right bg-[#fff] font-semibold shadow  rounded-full px-3 py-1 cursor-pointer"><GoArrowUpRight/></span>
          </div>
        </div>
    </div>
  )
}

export default Colthree
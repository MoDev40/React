import React from 'react'
import {FaWallet,FaTruck,FaPercent} from 'react-icons/fa'
import {BsFillBoxFill} from 'react-icons/bs'
const Coltwo = () => {
  return (
    <div className='w-full  flex flex-col justify-center items-center p-6 lg:p-8 '>
        <h1 className='btn'>Explore Now</h1>
        <div className='flex flex-col '>
            <span className='text-[#333333bb]'>-Benefits</span>
            <div className='grid grid-cols-1 items-center md:grid-cols-2'>
            <h2 className='font-bold text-[1.9rem] capitalize w-full p-2'>What makes us the prefered choise </h2>
            <p className='flex flex-row text-[#333333bb]'>
                <span className='text-[#0f4c0f73] font-bold p-2 text-[2rem]'>|</span>
               voluptatum asperiores maiores consectetur consequatur fugiat cumque incidunt repudiandae reprehenderit, dolorum veritatis rem illo ipsam impedit vitae?
            </p>
            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-4 md:mt-6'>
            <div className='boxes'>
                <div className='box'>
                    <FaWallet className='boxicons'/>
                    <h1 className='boxhead'>Easy Payment</h1>
                    <p className='boxpara'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo eaque dolor fugiat soluta vel sunt sit distinctio dolores ipsam incidunt! Molestiae, minus impedit iusto omnis minima corporis dicta error earum.
                    </p>
                </div>
            </div>
            <div className='boxes'>
                <div className='box'>
                    <FaTruck className='boxicons'/>
                    <h1 className='boxhead'>Free Delivery</h1>
                    <p className='boxpara'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo eaque dolor fugiat soluta vel sunt sit distinctio dolores ipsam incidunt! Molestiae, minus impedit iusto omnis minima corporis dicta error earum.
                    </p>
                </div>
            </div>
            <div className='boxes'>
                <div className='box'>
                    <BsFillBoxFill className='boxicons'/>
                    <h1 className='boxhead'>Easy Return</h1>
                    <p className='boxpara'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo eaque dolor fugiat soluta vel sunt sit distinctio dolores ipsam incidunt! Molestiae, minus impedit iusto omnis minima corporis dicta error earum.
                    </p>
                </div>
            </div>
            <div className='boxes'>
                <div className='box'>
                    <FaPercent className='boxicons'/>
                    <h1 className='boxhead'>Promo Offers</h1>
                    <p className='boxpara'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo eaque dolor fugiat soluta vel sunt sit distinctio dolores ipsam incidunt! Molestiae, minus impedit iusto omnis minima corporis dicta error earum.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Coltwo
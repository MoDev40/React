import React from 'react'
import carList from '../../assets/store.json'
import Car from './Car'
const Cars = () => {
  return (
    <div className='w-full my-12 space-y-8  place-content-center  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {
            carList.map( car => (
                <Car key={car.id} car={car}/>
            ))
        }
    </div>
  )
}

export default Cars
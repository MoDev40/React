import React from 'react'
import Colone from './cols/Colone'
import Coltwo from './cols/Coltwo'
import Colthree from './cols/Colthree'
import Colfour from './cols/Colfour'
import Colfive from './cols/Colfive'
import Subscripe from './footer/Subscripe'
import Footer from './footer/Footer'

const Home = () => {
  return (
    <div className="flex flex-col">
      <Colone/>
      <Coltwo/>
      <Colthree/>
      <Colfour/>
      <Colfive/>
      <Subscripe/>
      <Footer/>
    </div>
  )
}

export default Home
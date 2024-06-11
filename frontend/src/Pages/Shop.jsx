import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popluar from '../Components/Popular/Popluar'
import Offers from '../Components/Offers/Offers'
import NewCollection from '../Components/NewCollection/NewCollection'
import Newsletter from '../Components/Newsletter/Newsletter'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popluar/>
      <Offers/>
      <NewCollection/>
      <Newsletter/>
    </div>
  )
}

export default Shop

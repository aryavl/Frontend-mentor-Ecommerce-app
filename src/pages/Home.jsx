import React, { useState } from 'react'
import { data } from '../data'
import Header from '../Header'
import LightBox from '../LightBox'
import ProductPage from '../ProductPage'

const Home = ({cart,setCart}) => {
    const [products]=useState(data);
  const [lightBox,setLightBox]=useState(false)
  return (
    <div>
        <Header data={products} cart={cart}/>
      {lightBox &&   <LightBox data={products} setLightBox={setLightBox} lightBox={lightBox}/>}
      <ProductPage data={products} setLightBox={setLightBox} lightBox={lightBox} cart={cart} setCart={setCart}/>
    </div>
  )
}

export default Home
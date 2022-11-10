import React, { useState } from 'react'
import ProductDetail from './ProductDetail'
import {FaChevronLeft,FaChevronRight} from 'react-icons/fa'
const ProductPage = ({data,setLightBox,lightBox,cart,setCart}) => {
    const [value,setValue]=useState(0)
    const [slideIndex,setSlideIndex]=useState(1)
    const {mainImage}=data[value]
    const nextSlide = () =>{
        if(slideIndex !==data.length){
            setSlideIndex(slideIndex + 1)
        }else if(slideIndex === data.length){
            setSlideIndex(1)
        }
    }
    const prevSlide = () =>{
        if(slideIndex !==1){
            setSlideIndex(slideIndex - 1)
        }else if(slideIndex ===1){
            setSlideIndex(data.length)
        }
    }
  
  return (
    <section className=' max-w-7xl mx-auto  grid grid-cols-1 lg:grid-cols-2 gap-10  lg:place-items-center lg:py-20 '>
        <article >
            <div className='lg:hidden'>
            {data.map((item,index)=>(
                <div key={index} className={slideIndex === index+1 ? 'relative':'hidden'}>
        <img src={item.mainImage} alt="" 
        onClick={()=>setLightBox(!lightBox)}
        className='w-full lg:rounded-2xl cursor-pointer'/>
        <ul className='lg:hidden'>
            <li><button
            onClick={nextSlide}
            className='bg-white rounded-full p-5 shadow absolute left-4 top-1/2 -translate-y-1/2'>
                <FaChevronLeft/>
                </button></li>
            <li><button
            onClick={prevSlide}
            className='bg-white rounded-full p-5 shadow absolute right-4 top-1/2 -translate-y-1/2'>
            
                <FaChevronRight/>
                </button></li>
        </ul>
        </div>
            ))}
            </div>


            <div className='hidden lg:block'>
            
        <img src={mainImage} alt="" 
        onClick={()=>setLightBox(!lightBox)}
        className='w-full lg:rounded-2xl cursor-pointer'/>
        
           
            </div>
        <div>
            <ul className='hidden lg:flex items-center justify-start gap-5 flex-wrap mt-5'>
                    {data.map((item,index)=>(    
                    <li 
                    className={
                       ` ${index === value && 'border-2 border-orange-400 opacity-80'}border-2 rounded-xl overflow-hidden cursor-pointer`
                    }
                    key={item.id} onClick={()=>setValue(index)}><img src={item.thumbnail} alt=""  className='w-20 '/></li>
                    ))}
            </ul>      
        </div>
        </article>
        <article>
           <ProductDetail cart={cart} setCart={setCart}/>
        </article>
    </section>
  )
}

export default ProductPage
import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import closeIcon from './imagess/icon-close.svg'
const LightBox = ({data,setLightBox,lightBox}) => {
   
    const [slideIndex,setSlideIndex]=useState(1)
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
    <>
    <article  className='bg-black bg-opacity-50 fixed top-0 left-0 right-0 bottom-0 z-50'>
       <button
       onClick={()=>setLightBox(!lightBox)}
       >
       <img src={closeIcon} alt="" className='w-8 absolute top-10 right-10 bg-white rounded-full'/>
       </button>
        <div  className='flex items-center justify-center h-screen  '>
        {data.map((item,index)=>(
                <div key={index} className={slideIndex === index+1 ? 'relative':'hidden'}>
        <img src={item.mainImage} alt="" className='big-image h-96 lg:w-full lg:rounded-2xl '/>
        <ul>
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
    </article>
    </>
  )
}

export default LightBox
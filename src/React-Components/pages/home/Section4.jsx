import React from 'react'
import { useEffect ,useRef } from 'react';
import GSAP from 'gsap'

import marqueeImg from '../../../assets/media/logos/Pipefy.png'


const Section4 = () => {
    const marquee = useRef(null)
    const marqueeItems = useRef(null)

    useEffect(()=>{

        const marqueeClone = marqueeItems.current.cloneNode(true)
        marquee.current.append(marqueeClone)

     

    },[])
    
  return (
    <section className='w-screen section section-h-4 ~py-12/20'>
        <div className='marquee' ref={marquee}>
            <div className='marquee-item flex justify-center' ref={marqueeItems}>
                {
                    Array.from({length:8},(_,index)=>(
                        <div key={index} className='marquee-items'>
                            <img src={marqueeImg} alt=''/>
                        </div>
                    ))
                }
            </div>
        </div>
    
    </section>
  )
}

export default Section4
import React from 'react'
import { useEffect ,useRef } from 'react';
import logo1 from '../../../assets/media/logos/Django.png'
import logo2 from '../../../assets/media/logos/Dojo.png'
import logo3 from '../../../assets/media/logos/Pipefy.png'
import logo4 from '../../../assets/media/logos/Portal.png'
import logo5 from '../../../assets/media/logos/Rackspace.png'
import logo6 from '../../../assets/media/logos/Teamwork.png'


import GSAP from 'gsap'



const Section4 = () => {

    const logos = [logo1,logo2,logo3,logo4,logo5,logo6]

    const marquee = useRef(null)
    let marqueeItem = useRef(null)
  

    useEffect(() => {
        const marqueeClone =  marqueeItem.current.cloneNode(true)
        marquee.current.append(marqueeClone)

        const onResize = ()=>{

            const distance =  -(marqueeClone.getBoundingClientRect().width)

            GSAP.fromTo('.marquee-item ',
                {x:0},
                {x:distance,
                 duration:12,
                 ease:'none',
                 repeat:-1   
                }
            )
        }
        onResize()
        window.addEventListener("resize", onResize) 

        return () => {
            window.removeEventListener("resize", onResize);
        }


    }, [])

    
  return (
    <section className='section section-h-4 ~py-12/20'>
        <div className='marquee flex w-screen overflow-hidden' ref={marquee}>
            <div className='marquee-item  min-w-full flex justify-between' ref={marqueeItem}>
                {
                    logos.map((element,i)=>(
                        <div key={i} className='flex'>
                            <img  src={element} alt=''/>
                        </div>
                    ))                
                }
            
            </div>
        </div>
    
    </section>
  )
}

export default Section4
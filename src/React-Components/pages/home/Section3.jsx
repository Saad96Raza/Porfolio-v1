import React from 'react'
import { useState,useEffect } from 'react'
import Cta from '../../react-props/Cta'

const Section3 = () => {

    const features = ['UIUX' , 'BRANDING' ,'UIUX' , 'MOBILE APP']


    

  return (
    <section className='section-h-3 ~px-5/20 ~py-10/20'>
        <div className='container'>
            <div className='grid items-end grid-cols-1 ~gap-8/10 md:grid-cols-[80%_auto]'>
                <div className='content flex flex-col'>
                    <div className='flex flex-col'>
                        <h2 className='~text-f-s-56/f-s-72'>A visual designer focused on creating emotional digital experience</h2>
                        <p>Concentrate on your primary objective which is expanding your business, and leave it to me to ensure that your business is efficiently portrayed in the digital realm and distinguishes itself from the rivals.</p>
                    </div>
                    <div className='flex'>
                        <Cta styleName="Cta-md-stroke w-full hidden md:flex md:w-auto" text="About Me"/>
                    </div>
                </div>                
                <div className='features grid grid-cols-2 md:grid-cols-1 ~h-20/40'>
                    {
                        Array.from(features).map((element ,i)=>(
                            <div key={i} className='flex items-center justify-center md:items-end md:justify-end'><a>{element}</a></div>
                        ))
                    }
                </div>
                <div className='flex md:hidden'>
                    <Cta styleName="Cta-md-stroke w-full  md:w-auto" text="About Me"/>
                </div>
            </div>
        </div> 
    
    </section>
  )
}

export default Section3
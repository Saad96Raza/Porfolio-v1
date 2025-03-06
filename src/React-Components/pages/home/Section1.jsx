import React from 'react'
import Cta from '../../react-props/Cta'


const Section1 = () => {
  return (
    <section className='w-screen section section-h-1 ~px-5/20 ~py-10/20'>
      <div className='container grid grid-cols-1'>
          <div className="flex flex-col">
              <h1>Hello! I’m Saad.</h1>
              <h2 className='~text-f-s-74/f-s-104'>Interactive front-end developer  & <span className='~text-f-s-74/f-s-104'>visual designer</span></h2>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-[auto_49.05%]'>
              <div className='flex order-2 md:order-1'>
                <Cta text="Let's Talk" styleName='Cta-md  w-full md:w-auto'/>
              </div>
              <div className='flex order-1 md:order-2'>
                <p>A multidisciplinary designer harnessing the power of design to achieve online goals.</p>
              </div>     
          </div>
      </div>     
    </section>
    
  )
}

export default Section1
import React from 'react'

const Section7 = () => {
  return (
    <section className='w-screen section section-h-7 ~px-5/20 ~py-10/20'>
        <div className='container grid grid-cols-1 ~gap-12/20'>
            <div className='flex flex-col justify-center items-center content'>
                <span className='content-tagline'>Have an idea?</span>
                <h2 className='text-center ~text-f-s-74/f-s-104'>Let’s rock<span className='grey ~text-f-s-74/f-s-104'> with me</span></h2>
            </div>
            <div>
                <div className='flex justify-center items-center content-links'>
                    <a>ABOUT ME</a>
                    <a>WORKS</a>
                    <a>INSIGHTS</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section7
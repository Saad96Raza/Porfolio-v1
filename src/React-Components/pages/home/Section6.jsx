import React from 'react'

const Section6 = () => {
  return (
    <section className='w-screen section section-h-6 ~px-5/20 ~py-10/20'>
        <div className='container grid grid-cols-1 md:grid-cols-[auto_69.71%]'>
            <div className='flex'>
                <h2 className='~text-f-s-32/f-s-40'>Awards & Recognition</h2>
            </div>
            <div className='flex flex-col awwards'>
                {
                    Array.from({length:4},(_,i)=>(
                        <div key={i} className='flex flex-col awwards-link'>
                            <div className='flex justify-between'>
                                <div className='flex flex-col'>
                                    <h3>Honorable Mention</h3>
                                    <span>2022 - AWWARDS</span>
                                </div>
                                <i className='icon-ArrowDownRight flex items-center'></i>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Section6
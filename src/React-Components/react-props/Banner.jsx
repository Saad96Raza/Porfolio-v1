import React from 'react'
import Cta from './Cta'

const Banner = (props) => {
  return (
    <div className='banner flex flex-col'>
        <img className='w-100 h-auto' src={props.banner} alt='banner'/>
        <div className='banner-content flex justify-between'>
            <div className='flex flex-col'>
                <h2>{props.service}</h2>
                <span>{props.category}</span>
            </div>
            <Cta styleName="Cta-sm"/>
        </div>
    </div>    
  )
}

export default Banner
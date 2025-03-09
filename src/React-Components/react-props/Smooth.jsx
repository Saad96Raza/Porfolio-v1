import React from 'react'
import { useEffect,useRef } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

export let lenis = ''


const Smooth = () => {

    lenis = useRef(null)

    useEffect(()=>{



         lenis.current = new Lenis({
            lerp:0.1,
            duration:2,
            easing:	(t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        })
        
        const animate = (time)=>{
            lenis.current.raf(time)
            requestAnimationFrame(animate)
        }

        animate()


    },[])

  return (
    <React.Fragment></React.Fragment>
  )
}

export default Smooth
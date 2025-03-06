import React from 'react'
import {useEffect ,useRef} from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

export let lenis = null


const Smooth = () => {

    lenis = useRef(null)

    useEffect(()=>{

        lenis.current = new Lenis({
            lerp: 0.01,
            duration : 2,
            wheelMultiplier : 1.8,
            smoothWheel: true,
            autoResize :true
        })

        const update = (time)=>{
       
          lenis.current.raf(time)
          window.requestAnimationFrame(update)

        }


        update()

  
    },[])


  return (
    <React.Fragment></React.Fragment>
  )
}

export default Smooth
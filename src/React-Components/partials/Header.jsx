import React from 'react'
import { useRef,useState,useEffect } from 'react'
import GSAP from 'gsap'
import logo from '../../assets/media/showcasy-logo.png'
import Cta from '../react-props/Cta'

import {lenis} from '../react-props/Smooth'


export const Header = () => {

  const hamburgerIcon =  useRef('')
  const hamburgerOverlay =  useRef('')
  const [hamburger ,setHamburger] = useState(true)
  const overlayTimeline = useRef(null);


  const borderStroke = useRef('')
  
  const ovelayCont =  useRef('')
  const menuLinks = ['Home' , 'About Me' , 'Works' ,'Insights']

  useEffect(() => {

    overlayTimeline.current = GSAP.timeline({ paused: true, yoyo:true,reversed:true})
      .add('start')
      .to(ovelayCont.current,{
        height:'100vh',
        ease: 'power2.in',
        duration: 0.5,
      },'start')      
      .to(hamburgerOverlay.current, {
        attr: { d: 'M 0 0 C 1.3333 0 2.6667 0 4 0 V 1 Q 2 0 0 1 Q 0 1 0 0 Q 2 0 4 0' },
        ease: 'power1.in',
        duration: 0.5,
      },'start')
      .to(hamburgerOverlay.current, {
        attr: { d: 'M 0 0 C 1.3333 0 2.6667 0 4 0 V 2 Q 2 2 0 2 Q 0 2 0 0 Q 2 0 4 0' },
        ease: 'Power1.Out',
        duration: 0.5,
      })
      .to(ovelayCont.current.querySelectorAll('.nav-item'),{
        stagger:0.1,
        y:0,
        opacity:1,
      })
      .to(hamburgerIcon.current.children,{
        stroke:'#ffffff',
        duration: 1,
        ease: 'power2.in',
      },'start')
      .to(borderStroke.current,{
        borderColor:'#ffffff',
        duration: 1,
        ease: 'power2.in',
      },'start')
        
      
  }, []);
  return (
    <React.Fragment>
    <section className='w-screen header-section ~py-5/6 ~px-5/20'>
      <header className='container header flex justify-between'>
          <div className='logo flex items-center'>
              <a className=''>
                <img src={logo} alt='logo'/>
              </a>
          </div>
          <div className='menu flex relative'>
            <div className='hidden md:flex'>
              <Cta styleName="Cta-sm" text="Let's Talk"/>
            </div> 
              <div className='menu-btn sticky top-0 flex items-center z-40' ref={borderStroke}
                onClick={()=> setHamburger(
                    (hamburger && overlayTimeline.current.reversed()) ? (hamburgerIcon.current.classList.add('active'),overlayTimeline.current.play(),lenis.current.stop(),false) : 
                    (hamburgerIcon.current.classList.remove('active'),overlayTimeline.current.reverse(),lenis.current.start(),true ),
                )
                }>
                <svg className="hamburger hamburger-rotate hamburger-4" ref={hamburgerIcon} viewBox="0 0 100 100" width="35">
                  <path className="line top" d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20" />
                  <path className="line middle" d="m 70,50 h -40" />
                  <path className="line bottom" d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20" />
                </svg>          
              </div> 
            </div>                                         
      </header>
    </section>

    <div className='hamburger-ovelay flex fixed inset-0 z-10 ~px-5/20' ref={ovelayCont}>
      <svg className='absolute inset-0' viewBox="0 0 4 2" preserveAspectRatio="none">
          <path ref={hamburgerOverlay}  d="M 0 0 C 1.3333 0 2.6667 0 4 0 V 0 Q 2 0 0 0 Q 0 0 0 0 Q 2 0 4 0"/>
      </svg>
      <div className='container relative t-50 flex items-center overflow-hidden'>
          <div className='nav grid grid-cols-1 w-full'>
                {    
                (menuLinks) ?
                    Array.from(menuLinks).map((element,i)=>(
                      <div key={i} className='flex justify-between items-center nav-item'>
                        <a className='~text-f-s-56/f-s-72 nav-link'>{element}</a>
                        <Cta styleName="Cta-menu-link"/>
                      </div>
                  )) : ''
                }
          </div>
      </div>    
    </div>         

    </React.Fragment>
    
  )
}

export default Header;

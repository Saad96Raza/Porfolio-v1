import React from 'react'
import { useRef,useEffect } from 'react'
import GSAP from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger'

import Cta from '../../react-props/Cta'
import Banner from '../../react-props/Banner'

import img1 from '../../../assets/media/banners/Slider-1.png'
import img2 from '../../../assets/media/banners/Slider-2.png'
import img3 from '../../../assets/media/banners/Slider-3.png'
import img4 from '../../../assets/media/banners/Slider-4.png'

GSAP.registerPlugin(ScrollTrigger)




const Section2 = () => {
  const bannerRefs = useRef(null);

  useEffect(() => {

    const banners = bannerRefs.current.querySelectorAll('.banner')
    Array.from(banners).forEach((element)=>{
      GSAP.to(
        element,{
          scale:0.8,
          duration:1,
          opacity:0,
          scrollTrigger: {
            trigger: element,
            markers: false,
            scrub: 1,
            pin: true,
            pinSpacing: false,
          }
        }
      )

    })



    
  }, []);

  return (
    <section ref={bannerRefs} className="w-screen section section-h-2 ~px-5/20 ~py-10/20">
      <div className="container" >
        <div className="grid grid-cols-1">
          <div className="content flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center">
              <h2 className="text-left ~text-f-s-32/f-s-40">Selected works</h2>
            </div>
            <div  className="hidden md:flex justify-end items-center">
              <Cta styleName="Cta-sm" text="View All Works" />
            </div>
          </div>
          <Banner  banner={img1} service="Sportly" category="Mobile App Design" />
          <Banner banner={img2} service="Payrole" category="Website Design" />
          <Banner banner={img3} service="Wepay" category="Mobile App Design" />
          <Banner banner={img4} service="Estatery" category="Website Design" />
          <div className="flex md:hidden justify-center items-center">
            <Cta styleName="Cta-sm w-full" text="View All Works" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;

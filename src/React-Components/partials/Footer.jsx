import React from "react";
import logo from '../../assets/media/showcasy-logo-white.png'
import Cta from "../react-props/Cta";


export const Footer = () => {
   
  return (

    <footer className="~px-5/20 ~pt-10/20 ~pb-8/12">  
      <div className="container">      
        <div className="grid grid-cols-1 footer-content">
          <div className="flex flex-col footer-top">
              <div className="footer-logo flex flex-col justify-start items-start">
                  <img src={logo} alt=""/>
                  <p>A stunning digital designer portfolio website template for you.</p>
              </div>
              <div className="flex grid grid-cols-2 md:grid-cols-4 footer-links-btn">
                  <div className="link-btn"><Cta styleName="Cta-sm-stroke-footer" text="Instagram"/></div>
                  <div className="link-btn"><Cta styleName="Cta-sm-stroke-footer" text="Behance"/></div>
                  <div className="link-btn"><Cta styleName="Cta-sm-stroke-footer" text="Twitter"/></div>
                  <div className="link-btn"><Cta styleName="Cta-sm-stroke-footer" text="Dribbble"/></div>
              </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-links ~gap-10/1 grid grid-cols-1 md:grid-cols-[63.39%_auto]">
              <div className="grid grid-cols-2 k md:grid-cols-4">
                  {
                    Array.from({length :4},(_,i)=>(
                      <div key={i} className="flex flex-col footer-links-content">
                          <div className="flex"><a>Home v1</a></div>
                          <div className="flex"><a>Home v1</a></div>
                          <div className="flex"><a>Home v1</a></div>
                          <div className="flex"><a>Home v1</a></div>                      
                      </div>
                    ))
                  }
              </div>          
              <div className="flex flex-col subscribe">
                  <h5>Stay connected w/ me.</h5>
                    <div className="flex relative">
                        <input className="email w-full" name="email" type="email" placeholder="Enter your email"/><i className="icon-ArrowDownRight"/>
                    </div>
              </div>          
            </div>
          </div>
          <div className="tagline">
            <p className="text-center">©2023 All Rights Reserved.</p>
          </div>
          
        </div>
      </div>

    
    </footer>
    
  )
}



export default Footer;
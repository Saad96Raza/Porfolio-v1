import React from 'react'

const Cta = (props) => {
  return (
    <div className={`${props.styleName} flex justify-center items-center`}>
        <a className="small-btn-cta-link small-btn-cta-link-cta -xxl">
            <span className="small-btn-cta-border"></span>
            <span className="small-btn-cta-ripple">
            <span></span>
            </span>
            <span className="small-btn-cta-title">
            <span className="sm-btn-text" data-text={props.text}>{props.text}<i className='icon-arrowRight icon'></i></span>
            </span>
        </a>
    </div>     
  )
}

export default Cta
import React from 'react'
import Cv from '../../assest/cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={Cv} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'> Contact.. Me</a>
    </div>

  )
}

export default CTA;
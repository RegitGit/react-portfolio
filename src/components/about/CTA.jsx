import React from 'react'
import CV from "../../assets/pdfs/test_corona.pdf"

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download>Download CV</a>
    </div>
  )
}

export default CTA
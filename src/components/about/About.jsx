import React from 'react'
import "./about.css"
import MY_IMAGE from "../../assets/imgs/anon.png"
import CTA from "./CTA"

const About = () => {
  return (
    <section id='about'>
      <div className="image__container">
        <img src={MY_IMAGE} alt="It's me" />
        <CTA/>
      </div>
    </section>
  )
}

export default About
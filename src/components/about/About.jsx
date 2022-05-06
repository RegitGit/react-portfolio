import React from 'react'
import "./about.css"
import MY_IMAGE from "../../assets/imgs/anon.png"

const About = () => {
  return (
    <section id='about'>
      <div className="image__container">
        <img src={MY_IMAGE} alt="It's me" />
      </div>
    </section>
  )
}

export default About
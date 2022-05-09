import React from 'react'
import "./about.css"
import MY_IMAGE from "../../assets/imgs/anon.png"
import CV from "../../assets/pdfs/test_corona.pdf"
import { useInView } from 'react-intersection-observer'

const skillsData = [
  {
    id: 0,
    name: "JavaScript",
    percentage: 75
  },
  {
    id: 1,
    name: "HTML",
    percentage: 65
  },
  {
    id: 2,
    name: "CSS",
    percentage: 30
  },
  {
    id: 3,
    name: "C#",
    percentage: 90
  },
  {
    id: 4,
    name: "Unity",
    percentage: 90
  }
]

var firstTimeViewed = false;

const About = () => {
  const { ref, inView, entry } = useInView({
    rootMargin: "-250px",
  });
  
  if (inView && !firstTimeViewed) {
    firstTimeViewed = true;
    
    entry.target.style.width = "180px";
  }

  return (
    <section id='about'>
      <div className="image__container">
        <img src={MY_IMAGE} alt="It's me" />
        <div className='about__cta'>
          <a href={CV} download>Download CV</a>
        </div>
      </div>
      <div className="skills__container container">
      {
        skillsData.map(({id, name, percentage}) => {
          return (
            <div key={id} className="skills__skill">
                <h3>{name}</h3>
                <svg xmlns="http://www.w3.org/2000/svg" className='skills__fullBar'>
                  <rect width={"180"} height={"10"} style={{fill:"rgb(0,0,111)"}}/>
                  <rect width={percentage + "%"} height={"10"} style={{fill:"rgb(0,0,255)"}}/>
                </svg>
            </div>
          )
        })
      }
      </div>
    </section>
  )
}

export default About
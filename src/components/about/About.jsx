import React from 'react'
import "./about.css"
import MY_IMAGE from "./zuge_kleiner.png"
import CV from "./test_corona.pdf"
import { useInView } from 'react-intersection-observer'
import Typed from 'typed.js'
import skillsData from "./skillsData.json"
import experienceData from "./experienceData.json"
import DividerPattern from './DividerPattern'

var firstTimeViewed = false;
var firstTimeViewedEx = false;
var firstTimeViewedSkills = false;

const About = () => {
  const [ ref, inView, entry ] = useInView({
    rootMargin: "-100px",
  });
  const [ refEx, inViewEx, entryEx ] = useInView({
    rootMargin: "-150px",
  });
  const [ refSkills, inViewSkills, entrySkills ] = useInView({
    rootMargin: "-20px",
  });

  const [ refAbout, inViewAbout, entryAbout ] = useInView({
    threshold: 0.6,
  });

  if (inViewAbout) {
    document.getElementById("nav-home").classList.remove("active")
    document.getElementById("nav-about").classList.add("active")
    document.getElementById("nav-projects").classList.remove("active")
    document.getElementById("nav-contact").classList.remove("active")
  }
  
  if (inView && !firstTimeViewed) {
    firstTimeViewed = true;
    
    new Typed(entry.target, {
      strings: ["Meine Kenntnisse"],
      startDelay: 100,
      typeSpeed: 50,
      showCursor: false,
      onComplete() {
        setTimeout(() => {
          entry.target.classList.remove("typewriter-blink");
          entry.target.classList.add("typewriter-fade-out");
        }, 2000);
      }
    });
  }
  if (inViewEx && !firstTimeViewedEx) {
    firstTimeViewedEx = true;
    document.getElementById("experience__timelineBox-bg").style.height = "100%";
    
    new Typed(entryEx.target, {
      strings: ["Meine Erfahrung"],
      startDelay: 100,
      typeSpeed: 50,
      showCursor: false,
      onComplete() {
        setTimeout(() => {
          entryEx.target.classList.remove("typewriter-blink");
          entryEx.target.classList.add("typewriter-fade-out");
        }, 2000);
      }
    });
  }

  if (inViewSkills && !firstTimeViewedSkills) {
    firstTimeViewedSkills = true;
    
    let children = entrySkills.target.children;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      const bg = child.querySelector(".skills__barFG");
      bg.style.width = "100%";      
    }
  }

  return (
    <section ref={refAbout} id='about'>
      
      <div className="image__container">
        <img src={MY_IMAGE} alt="It's me" />
      </div>
      <div className="about__aboutMeTextContainer">
        <p className='about__aboutMeText'>
          Das Entwickeln begleitet mich schon seit meinen jungen Jahren. Ob bei einem selbst entwickelten Spielchen oder bei einer App, stand immer das Kreiren nach eigenen Vorstellungen im Vordergrund. Demnach habe ich mich auch für ein Studium entschieden, das alle Aspekte des Entwicklungprozesses kombiniert hat: genannt Mediendesigninformatik.
        </p>
        <a href={CV} className='about__cta' download>Download Lebenslauf</a>
      </div>
      <div className='container'>
        <h3 ref={ref} className='typewriter typewriter-blink small-headline'></h3>
      </div>
      <div ref={refSkills} className="skills__container container">
      {
        skillsData.map(({id, name, percentage}) => {
          return (
            <div key={name} className="skills__skill">
                <h3>{name}</h3>
                <div className="skills__barContainer">
                  <div className="skills__barBG"></div>
                  <div className="skills_barFGContainer" style={{width:percentage + "%"}}>
                    <div className="skills__barFG"></div>
                  </div>
                </div>
            </div>
          )
        })
      }
      </div>

      <DividerPattern name="1" rotation="177"/>

      <div className='container'>
        <h3 ref={refEx} className='typewriter typewriter-blink small-headline'></h3>
      </div>
      <div className="experience__timelineContainer container">
        <div className="experience__timelineBox">
          <div id="experience__timelineBox-bg"></div>
        </div>
        <div className="experiences__container">
          {
            experienceData.map(({id, image, title, subtitle, dateStart, dateEnd, text, link}) => {
              return (
                <div key={id}>
                  <h2 className='experience__date'>{dateEnd}</h2>
                  <a href={link} target="_blank" className='experiences__link'>
                    <div className="experiences__experience">
                        <div className='experiences__header'>
                          <div className='experiences__item-image-container'>
                            <img src={image} alt={title} className="experiences__item-image"/>
                          </div>
                          <div>
                              <h2>{title}</h2>
                              <h4 className='text-light'>{subtitle}</h4>
                          </div>
                          
                        </div>
                      <p className='projects__text'>{text}</p>
                    </div>
                  </a>
                  <h2 className='experience__date'>{dateStart}</h2>
                </div>
              )
            })
          } 
        </div>
        
      </div>
    </section>
  )
}

export default About
import React from 'react'
import "./projects.css"
import {FiExternalLink} from "react-icons/fi"
import Typed from 'typed.js'
import { useInView } from 'react-intersection-observer'
import projectsData from "./projectsData.json"

var firstTimeViewed = false;

const Projects = () => {
  const [ ref, inView, entry ] = useInView({
    rootMargin: "-250px",
  });
  const [ refProjects, inViewProjects, entryProjects ] = useInView({
    rootMargin: "-200px",
  });

  if (inViewProjects) {
    document.getElementById("nav-home").classList.remove("active")
    document.getElementById("nav-about").classList.remove("active")
    document.getElementById("nav-projects").classList.add("active")
    document.getElementById("nav-contact").classList.remove("active")
  }
  
  if (inView && !firstTimeViewed) {
    firstTimeViewed = true;
    
    new Typed(entry.target, {
      strings: ["My recent work"],
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
  
  // Tag ordering
  let currentTag = "";
  function hideProjects(activeTag) {
    let parents = document.getElementsByClassName("projects__article");
    if (activeTag === "") return;
    else if (currentTag === activeTag) {
      
      for (let i = 0; i < parents.length; i++) {
          let parent = parents[i];
          parent.classList.remove("projects__hideProject");
          let child = parent.querySelector("." + activeTag)
          if (child) {
            child.classList.remove("projects__tagSelected");
          }
      }
      activeTag = "";
      currentTag = "";
      return;
    }
    
    for (let i = 0; i < parents.length; i++) {
      let parent = parents[i];
      let child = parent.querySelector("." + activeTag)
      if (child) {
        child.classList.add("projects__tagSelected");
      }
      if (currentTag !== "") {
          let childCurrent = parent.querySelector("." + currentTag)
          if (childCurrent) {
            childCurrent.classList.remove("projects__tagSelected");
        }
      }
      if (!child) {
        parent.classList.add("projects__hideProject");
      }
      else {
        parent.classList.remove("projects__hideProject");
      }
    }
    currentTag = activeTag;
  }

  return (
    <div>
      <div className="svg__flex">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,256L1440,96L1440,320L0,320Z"></path></svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200"><path fill="#0099ff" fillOpacity="1" d="M0,96L1440,32L1440,0L0,0Z"></path></svg>
      </div>
    <section ref={refProjects} id='projects'>
      <div className='container'>
        <h3 ref={ref} className='typewriter typewriter-blink small-headline'></h3>
      </div>
      <div className='container projects__container'>
        {
          projectsData.map(({id, image, title, explanation, tags, demo}) => {
            return (
              <article key={id} className="projects__article">
                <div className="projects__item">
                  <div className='projects__item-cta'>
                    <h3>{title}</h3>
                    <a href={demo} className="btn btn-primary projects__item-link" target="_blank"><FiExternalLink size={24}/></a>
                    <div className='projects__tags'>
                      <ul>
                        {
                          tags.map((tag, index) => {
                            return (
                              <li key={index} onClick={(e) => hideProjects("projects__" + tag.replace(/ /g, "_"), e.target)} className={"projects__tag projects__" + tag.replace(/ /g, "_")}>{tag}</li>
                            )
                          })
                        }
                      </ul>
                    </div>
                  </div>
                  <div className='projects__item-image-container'>
                    <img src={image} alt={title} className="projects__item-image"/>
                  </div>
                </div>
                <p className='projects__text'>{explanation}</p>
              </article>
            )
          })
        }
      </div>
    </section>
        </div>
  )
}

export default Projects
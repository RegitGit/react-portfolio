import React, { useEffect } from 'react'
import "./projects.css"
import {RiSearchEyeLine} from "react-icons/ri"
import Typed from 'typed.js'
import { useInView } from 'react-intersection-observer'
import projectsData from "./projectsData.json"
import { Link, useLocation } from 'react-router-dom'
import DividerPattern from '../about/DividerPattern'

var firstTimeViewed = false;

const Projects = () => {
  // height of all projects




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

  function tagClick(e, tag) {
    e.preventDefault();
    hideProjects("projects__" + tag.replace(/ /g, "_"), e.target)
  }

  function disableScrolling() {
    document.body.classList.add("disable-scrolling")
  }
  function enableScrolling() {
    document.body.classList.remove("disable-scrolling")
  }

  const location = useLocation();

    useEffect(() => {
      if (location.pathname === "/") {
        enableScrolling();
      }
      else {
        disableScrolling();
      }
    }, [location]);

  return (
    <div>
      <DividerPattern name="3" rotation="183"/>
    <section ref={refProjects} id='projects'>
      <div className='container'>
        <h3 ref={ref} className='typewriter typewriter-blink small-headline'></h3>
      </div>
      <div className='container projects__container'>
        {
          projectsData.map(({id, image, title, explanation, tags}) => {
            return (
              <Link to={"/" + id} key={id}>
              <article className="projects__article">
                <div className="projects__item">
                  <div className='projects__item-cta'>
                    <h3>{title}</h3>
                    <RiSearchEyeLine className='projects__view-img' size={38}/>
                    <div className='projects__tags'>
                      <ul>
                        {
                          tags.map((tag, index) => {
                            return (
                              <li key={index} onClick={(e) => { tagClick(e, tag) }} className={"projects__tag projects__" + tag.replace(/ /g, "_")}>{tag}</li>
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
              </Link>
            )
          })
        }
      </div>
    </section>
        </div>
  )
}

export default Projects
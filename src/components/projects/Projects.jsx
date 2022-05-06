import React from 'react'
import "./projects.css"
import IMG1 from "./IMG1.jpg"
import IMG2 from "./IMG2.jpg"
import IMG3 from "./IMG3.jpg"
import {FiExternalLink} from "react-icons/fi"
import Typed from 'typed.js'
import { useInView } from 'react-intersection-observer';

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Title",
    explanation: "Test",
    tags: ["JS", "CSS"],
    demo: "link"
  },
  {
    id: 2,
    image: IMG2,
    title: "Title2",
    explanation: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos cupiditate doloremque ipsam est aperiam ab vitae ullam itaque praesentium? Consequatur.",
    tags: ["Arduino", "Android Studio"],
    demo: "link"
  },
  {
    id: 3,
    image: IMG3,
    title: "Title3",
    explanation: "Test",
    tags: ["JS", "HTML"],
    demo: "link"
  },
]

var firstTimeViewed = false;

const Projects = () => {
  const { ref, inView, entry } = useInView({
    rootMargin: "-250px",
  });
  
  if (inView && !firstTimeViewed) {
    firstTimeViewed = true;
    
    new Typed(entry.target, {
      strings: ["My recent work"],
      startDelay: 500,
      typeSpeed: 50,
      showCursor: false,
      onComplete() {
        setTimeout(() => {
          entry.target.classList.remove("typewriter-blink");
          entry.target.classList.add("typewriter-fade-out");
        }, 1200);
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
    <section id='projects'>
      <div className='container'>
        <h3 ref={ref} id='projects__title' className='typewriter typewriter-blink projects__headline'></h3>
      </div>
      <div className='container projects__container'>
        {
          data.map(({id, image, title, explanation, tags, demo}) => {
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
  )
}

export default Projects
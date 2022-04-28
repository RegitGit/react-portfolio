import React from 'react'
import "./projects.css"

const data = [
  {
    id: 1,
    image: "IMG1",
    title: "Title",
    tags: ["JS", "CSS"],
    demo: "link"
  },
  {
    id: 2,
    image: "IMG2",
    title: "Title2",
    tags: ["Arduino", "Android Studio"],
    demo: "link"
  },
  {
    id: 3,
    image: "IMG3",
    title: "Title3",
    tags: ["JS", "HTML"],
    demo: "link"
  },
]


const Projects = () => {
  // Tag ordering
  let currentTag = "";
  function hideProjects(activeTag) {
    let parents = document.getElementsByClassName("projects__item");
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
      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, tags, demo}) => {
            return (
              <article key={id} className='projects__item'>
                <div className='projects__item-image'>
                  <img src={image} alt={title}/>
                </div>
                <h3>{title}</h3>
                <div className='projects__item-cta'>
                  <a href={demo} className="btn btn-primary" target="_blank">Demo</a>
                </div>
                <div className='projects__tags'>
                  <ul>
                  {
                    tags.map((tag, index) => {
                      return (
                        <li key={index} onClick={(e) => hideProjects("projects__" + tag.replace(/ /g, "_"), e.target)} className={"projects__" + tag.replace(/ /g, "_")}>{tag}</li>
                      )
                    })
                  }
                  </ul>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Projects
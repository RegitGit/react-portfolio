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
  function test(activeTag) {
    let parents = document.getElementsByClassName("projects__item");
    console.log(activeTag)
    console.log(currentTag)
    if (activeTag === "") return;
    else if (currentTag === activeTag) {
      activeTag = "";
      for (let i = 0; i < parents.length; i++) {
          let parent = parents[i];
          parent.style.display = "block";
        }
      return;
    }
    currentTag = activeTag;
    for (let i = 0; i < parents.length; i++) {
      let parent = parents[i];
      let child = parent.querySelector("." + activeTag)
      if (!child) {
        parent.style.display = "none";
      }
      else {
        parent.style.display = "block";
      }
    }
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
                        <li key={index} onClick={() => test("projects__" + tag.replace(/ /g, "_"))} className={"projects__" + tag.replace(/ /g, "_")}>{tag}</li>
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
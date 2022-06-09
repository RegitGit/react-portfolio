import React from 'react'
import { Link, useParams } from 'react-router-dom'
import "./project.css"
import projectsData from "./projectsData.json"

const Project = () => {
    

    const {id} = useParams();
    const content = projectsData[id].content;
    
  return (
    <div>
        <div className='container project__container'>
            <div className='project__container-container'>
                <ul className='projects__texts'>
                    <p className='project__text'>{content.text}</p>
                    <div className='project__image-container'>
                    {
                        content.images.map((value, i) => {
                            return (
                                <img key={i} className='project__image' src={value} alt=""></img>       
                                )
                            })
                    }
                    </div>
                </ul>
            </div>   
        </div>
        <Link to="/">
            <div className='project__overlay'>
            </div>
        </Link>  
    </div>
  )
}

export default Project
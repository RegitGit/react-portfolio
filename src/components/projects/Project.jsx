import React from 'react'
import { Link, useParams } from 'react-router-dom'
import "./project.css"
import projectsData from "./projectsData.json"

const Project = () => {
    const {id} = useParams();
    const content = projectsData[id].content;
    console.log(content)
  return (
    <div>
        <div className='container project__container'>
            <div className='project__container-container'>
                <ul className='projects__texts'>
                    {
                        content.texts.map((value, i) => {
                            return (
                                <li key={i}>
                                    <img className='project__image' src={content.images[i]} alt=""></img>
                                    <p className='project__text'>{value}</p>
                                </li>
                                )
                        })
                    }
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
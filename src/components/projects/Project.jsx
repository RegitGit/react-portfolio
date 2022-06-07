import React from 'react'
import { Link } from 'react-router-dom'
import "./project.css"

const Project = () => {

  return (
    <div>
        <div className='container project__container'>
        </div>   
        <Link to="/">
            <div className='project__overlay'>
            </div>
        </Link>  
    </div>
  )
}

export default Project
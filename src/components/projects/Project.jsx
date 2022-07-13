import React from 'react'
import { Link, useParams } from 'react-router-dom'
import "./project.css"
import projectsData from "./projectsData.json"

import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'

const Project = () => {
    
    const {id} = useParams();
    const data = projectsData[id];
    const content = data.content;
    
  return (
    <div>
        <div className='container project__container'>
            <div className='project__container-container'>
                <div className='projects__texts'>
                    <p className='project__text'>{content.text}</p>
                        <Gallery options={{wheelToZoom: true}}>
                            <div className='project__image-container' id={data.id}>
                            
                            {
                                content.images.map((image, index) => {
                                    

                                    return (
                                        <Item
                                            key={data.id + "-" + index}
                                            original={image.url}
                                            thumbnail={image.thumbnailUrl}
                                            width={image.width}
                                            height={image.height}
                                        >
                                        {({ ref, open }) => (
                                            <img className='project__image' ref={ref} onClick={open} src={image.thumbnailUrl} />
                                        )}
                                        </Item>
                                    )
                                })
                            }
                        </div>
                    </Gallery>
                </div>
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
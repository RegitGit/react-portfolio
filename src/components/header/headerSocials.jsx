import React from 'react'
import {SiXing} from 'react-icons/si'
import {AiFillGithub} from 'react-icons/ai'

const headerSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.xing.com' target={"_blank"}><SiXing size={22}/></a>
        <a href='https://www.github.com' target={"_blank"}><AiFillGithub size={22}/></a>

    </div>
  )
}

export default headerSocials
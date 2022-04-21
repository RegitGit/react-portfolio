import React from 'react'
import "./navbar.css"
import {AiTwotoneHome} from 'react-icons/ai'
import {FaUserAlt} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import {BsFillFileEarmarkCodeFill} from 'react-icons/bs'
import { useState } from 'react'

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}><AiTwotoneHome/></a>
      <a href='#about' onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}><FaUserAlt/></a>
      <a href='#contact' onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}><MdEmail/></a>
      <a href='#projects' onClick={() => setActiveNav("#projects")} className={activeNav === "#projects" ? "active" : ""}><BsFillFileEarmarkCodeFill/></a>
    </nav>
  )
}

export default Navbar
import React from 'react'
import "./navbar.css"
import {AiOutlineHome} from 'react-icons/ai'
import {FiUser} from 'react-icons/fi'
import {AiOutlineMail} from 'react-icons/ai'
import {GoFileCode} from 'react-icons/go'
import { useState } from 'react'

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a id='nav-home' href='#' onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}><AiOutlineHome/></a>
      <a id='nav-about' href='#about' onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}><FiUser/></a>
      <a id='nav-projects' href='#projects' onClick={() => setActiveNav("#projects")} className={activeNav === "#projects" ? "active" : ""}><GoFileCode/></a>
      <a id='nav-contact' href='#contact' onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}><AiOutlineMail/></a>
    </nav>
  )
}

export default Navbar
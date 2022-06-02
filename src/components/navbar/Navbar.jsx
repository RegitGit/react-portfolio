import React from 'react'
import "./navbar.css"
import {AiOutlineHome} from 'react-icons/ai'
import {FiUser} from 'react-icons/fi'
import {AiOutlineMail} from 'react-icons/ai'
import {GoFileCode} from 'react-icons/go'
import { useState } from 'react'

const Navbar = () => {

  return (
    <nav>
      <a id='nav-home' href='#'><AiOutlineHome/></a>
      <a id='nav-about' href='#about'><FiUser/></a>
      <a id='nav-projects' href='#projects'><GoFileCode/></a>
      <a id='nav-contact' href='#contact'><AiOutlineMail/></a>
    </nav>
  )
}

export default Navbar
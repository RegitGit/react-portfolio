import React, { useEffect, useRef } from 'react'
import "./header.css"
import Typed from 'typed.js'

const Header = () => {

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Hello, I'm<h1>Regit</h1><h5 class=\"text-light\">3D Developer</h5>"],
      startDelay: 1000,
      typeSpeed: 100,
      showCursor: false,
      cursorChar: "_",
      onComplete(self) {

      },
      onBegin(self) {
        
      }
    });
    
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <header>
      <div className="container header__container">
        <span ref={el}></span>
        {/* <h1>Regit</h1>
        <h5 className="text-light">3D Developer</h5> */}
      </div>
    </header>
  )
}

export default Header
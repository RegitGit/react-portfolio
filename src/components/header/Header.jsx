import React, { useEffect, useRef } from 'react'
import "./header.css"
import Typed from 'typed.js'

const Header = () => {

  const el = useRef(null);
  const el2 = useRef(null);
  const el3 = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Hello, I'm"],
      startDelay: 1000,
      typeSpeed: 100,
      showCursor: false,
      onComplete(self) {
        el.current.classList.remove("typewriter");
        el2.current.classList.add("typewriter");
        setTimeout(() => {
          const typed2 = new Typed(el2.current, {
            strings: ["Regit"],
            startDelay: 200,
            typeSpeed: 120,
            showCursor: false,
            onComplete(self) {
              setTimeout(() => {
              el2.current.classList.remove("typewriter");
              el3.current.classList.add("typewriter");
              const typed3 = new Typed(el3.current, {
                strings: ["Unity Developer", "Web Developer", "3D Developer", "App Developer???", "Developer"],
                startDelay: 200,
                typeSpeed: 70,
                showCursor: false,
              });
            }, 1000);
            },
          });
        }, 500);
      },
    });
    
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <header>
      <div className="container header__container">
        <span ref={el} className="typewriter"></span>
        <h1 ref={el2}></h1>
        <h5 ref={el3} className="text-light"></h5>
      </div>
    </header>
  )
}

export default Header
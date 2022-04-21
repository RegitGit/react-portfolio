import React, { useEffect, useRef } from 'react'
import "./header.css"
import Typed from 'typed.js'
import HeaderSocials from "./headerSocials"

const Header = () => {

  const el = useRef(null);
  const el2 = useRef(null);
  const el3 = useRef(null);

  useEffect(() => {
    new Typed(el.current, {
      strings: ["Hello, I'm"],
      startDelay: 1000,
      typeSpeed: 100,
      showCursor: false,
      onComplete() {
        setTimeout(() => {
          el.current.classList.remove("typewriter");
          el2.current.classList.add("typewriter");
          new Typed(el2.current, {
            strings: ["Regit"],
            startDelay: 60,
            typeSpeed: 120,
            showCursor: false,
            onComplete() {
              setTimeout(() => {
              el2.current.classList.remove("typewriter");
              el3.current.classList.add("typewriter");
              new Typed(el3.current, {
                strings: ["Unity Developer", "Web Developer", "3D Developer", "App Developer??", "Developer."],
                startDelay: 200,
                typeSpeed: 50,
                backSpeed: 20,
                backDelay: 250,
                showCursor: false,
                onComplete() {
                  setTimeout(() => {
                    el3.current.classList.remove("typewriter-blink");
                    el3.current.classList.add("typewriter-fade-out");
                  }, 2000);
                }
              });
            }, 1000);
            },
          });
        }, 700);
      },
    });
  }, []);

  return (
    <header>
      <div className="container header__container">
        <h5 ref={el} className="typewriter typewriter-blink"></h5>
        <h1 ref={el2} className="typewriter-blink"></h1>
        <h5 ref={el3} className="text-light typewriter-blink"></h5>
        <HeaderSocials/>
      </div>
    </header>
  )
}

export default Header
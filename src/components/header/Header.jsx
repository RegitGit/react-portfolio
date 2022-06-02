import React, { useEffect, useRef } from 'react'
import "./header.css"
import Typed from 'typed.js'
import HeaderSocials from "./headerSocials"
import { useInView } from 'react-intersection-observer'

const Header = () => {

  const [ refHome, inViewHome, entryHome ] = useInView({
    rootMargin: "-50px",
  });

  if (inViewHome) {
    document.getElementById("nav-home").classList.add("active")
    document.getElementById("nav-about").classList.remove("active")
    document.getElementById("nav-projects").classList.remove("active")
    document.getElementById("nav-contact").classList.remove("active")
  }

  const el = useRef(null);
  const el2 = useRef(null);
  const el3 = useRef(null);

  useEffect(() => {
    new Typed(el.current, {
      strings: ["Hello, I'm"],
      startDelay: 300,
      typeSpeed: 130,
      showCursor: false,
      onComplete() {
        setTimeout(() => {
          el.current.classList.remove("typewriter");
          el2.current.classList.add("typewriter");
          new Typed(el2.current, {
            strings: ["Regit"],
            startDelay: 60,
            typeSpeed: 150,
            showCursor: false,
            onComplete() {
              setTimeout(() => {
              el2.current.classList.remove("typewriter");
              el3.current.classList.add("typewriter");
              new Typed(el3.current, {
                strings: ["Unity Developer", "Web Developer", "3D Developer", "App Developer??", "Developer."],
                startDelay: 200,
                typeSpeed: 60,
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
            }, 800);
            },
          });
        }, 700);
      },
    });
  }, []);

  return (
    <header ref={refHome}>     
      <canvas id="renderCanvas"></canvas>
      {/* <svg style={{width:"100vw"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,50L1440,196L1440,0L0,0Z"></path></svg> */}
      <HeaderSocials/>
      <div className="container header__container">
        <h5 ref={el} className="typewriter typewriter-blink"></h5>
        <h1 ref={el2} className="typewriter-blink"></h1>
        <h3 ref={el3} className="text-light typewriter-blink"></h3>
      </div>
    </header>
  )
}

export default Header
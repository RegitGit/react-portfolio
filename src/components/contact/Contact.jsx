import React from 'react'
import { useInView } from 'react-intersection-observer';
import Typed from 'typed.js';
import "./contact.css"
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import DividerPattern from '../about/DividerPattern';


var firstTimeViewed = false;

const Contact = () => {
  const [ ref, inView, entry ] = useInView({
    rootMargin: "-150px",
  });

  const [ refContact, inViewContact, entryContact ] = useInView({
    threshold: 0.9,
  });

  if (inViewContact) {
    document.getElementById("nav-home").classList.remove("active")
    document.getElementById("nav-about").classList.remove("active")
    document.getElementById("nav-projects").classList.remove("active")
    document.getElementById("nav-contact").classList.add("active")
  }

  if (inView && !firstTimeViewed) {
    firstTimeViewed = true;
    
    new Typed(entry.target, {
      strings: ["My contact info"],
      startDelay: 100,
      typeSpeed: 50,
      showCursor: false,
      onComplete() {
        setTimeout(() => {
          entry.target.classList.remove("typewriter-blink");
          entry.target.classList.add("typewriter-fade-out");
        }, 2000);
      }
    });
  }

  return (
    <div>
      <DividerPattern name="2" rotation="177"/>
      <section ref={refContact} id='contact'>
        <div className='container'>
          <h3 ref={ref} className='typewriter typewriter-blink small-headline'></h3>
        </div>
        <div className="container contact__options">
          <a href='mailto:steffenthom96@gmail.com'>
            <article className='contact__option'>
              <AiOutlineMail/>
              <h4>Email</h4>
              <h5>steffenthom96@gmail.com</h5>
              <p className='contact__option-text'>Send a mail</p>
            </article>
          </a>
          <a href='tel:+4915738686393'>
            <article className='contact__option'>
              <AiOutlinePhone/>
              <h4>Phone number</h4>
              <h5>+49 1573 8686393</h5>
              <p className='contact__option-text'>Send a message</p>
            </article>
          </a>
        </div>
      </section>
    </div>
  )
}

export default Contact
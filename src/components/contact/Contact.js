import React from 'react'
import './Contact.css'
import Section from '../section/Section'
import { Bounce } from 'react-reveal'
import ContactForm from '../contactForm/ContactForm'
import linkedin from '../../images/social/linkedin.png'
import github from '../../images/social/github.png'
import email2 from '../../images/social/email2.png'

const Contact = () => {
  return (
    <Section title="Contact">
      <ContactForm />
      <Bounce cascade>
        <div className="links">
          <a
            href="https://linkedin.com/in/mahlogonolo-m-355188285"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="Linkedin Logo" width="40px" />
          </a>
          <a
            href="https://github.com/LokoMoloko98/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="Github Logo" width="40px" />
          </a>
          <a
            href="mailto: communication@moloko-mokubedi.co.za"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={email2} alt="Email Logo" width="100px" height="100px" />
          </a>
      </div>
    </Bounce>
    </Section >
  )
}

export default Contact

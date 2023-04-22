import React from 'react'
import './About.css'
import Typewriter from 'typewriter-effect'
import { Link } from 'react-scroll'
import { Fade } from 'react-reveal'
import Section from '../section/Section'
import Skills from '../skills/Skills'

const About = () => {
  return (
    <Section title="About">
      <div className="about-content">
        <Fade duration={1000}>
          <div className="about-text">
            <h2>Who is Moloko? 🤔 </h2>
            <p><br /></p>
            <p>
              ⚡ Moloko is the inquisitive, never-fear-to-try spirited chap who is always figuring out how to grow and improve, not just himself but also the organization with which he affiliates with.               
            </p>
            <p>
            ⚡ I am actively seeking opportunities in the Web and Software Development and DevOps fields, leveraging my experience and passion for technology to drive meaningful impact for organizations. If you have a role that aligns with my skills and experience, I would welcome the opportunity to discuss how I can contribute to your team's success.
            </p> 
            <p>
              👨🏿‍💻 I previously fulfilled the role of Junior DevOps Engineer at <a href="https://cloud-fundis.co.za/"> Cloud Fundis </a> where I was learning and implementing Infrastructure-as-Code Deployments and Web App Containerization. 
            </p>

            <p>
            📝 I have experience working with the AWS CI/CD Tools, Terraform, Linux and Docker.   
            </p>

            <p>
              🎓I am a soon-to-be-graduate of the University of Cape Town, where I studied towards a BSc in Geomatics majoring in Geoinformatics and Computer Science.
            </p>
            
            <p>
              🧗🏿 My interests include traveling, gyming and gaming.                 
            </p>
            </div>
        </Fade>
        <Skills />
      </div>
    </Section>
  )
}

export default About

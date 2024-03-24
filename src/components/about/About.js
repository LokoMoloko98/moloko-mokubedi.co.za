import React from 'react'
import './About.css'
import Typewriter from 'typewriter-effect'
import { Link } from 'react-scroll'
import { Fade } from 'react-reveal'
import Section from '../section/Section'
import Skills from '../skills/Skills'

const linkStyle = {
  fontWeight: 'bold',
  textDecoration: 'none', // Remove underline
  color: 'white', // Default color for unvisited link
  cursor: 'pointer',
};

const About = () => {
  return (
    <Section title="About">
      <div className="about-content">
        <Fade duration={1000}>
          <div className="about-text">
            <h2>Who is Moloko? 🤔 </h2>
            <p><br /></p>
            <p>
              ⚡ I am a proactive and hardworking <a href='https://aws.amazon.com/?nc2=h_lg' target='_blank' style={linkStyle}>Amazon Web Services (AWS)</a> and <a href='https://www.terraform.io/' target="_blank" style={linkStyle}>Terraform</a> certified cloud engineer still in the early stages of my career in the cloud computing and cloud platform administration space. 
            </p>
            <p>
              🧾 I am committed to continuously learning and growing in the cloud computing and software platform administration space and this is demonstrated by the certifications that I have attained which include the AWS Cloud Practitioner, AWS Solutions Architect Associate, AWS Developer Associate and HashiCorp Terraform Associate (003)
            </p>
            <p>
              🛠️ I have practical hands-on experience working with Docker and docker-compose, Terraform, Bash, and Python scripting, and Git for version control
            </p>
            <p>
              👨🏿‍💻 Currently I fulfil the role of Junior DevOps Engineer at <a href="https://barefootcyber.com/" target="_blank" style={linkStyle}> Barefoot Cyber</a>, where my responsibilities include designing microservice-based architectures for their SIEM platform, creating and deploying virtual infrastructure and services, setting up and tracking monitoring tools.
            </p>
          </div>
        </Fade>
        <Skills />
      </div>
    </Section>
  )
}

export default About

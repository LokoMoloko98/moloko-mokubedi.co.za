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
              ⚡ A software practioner and Geoinformatics and Computer Science graduand of the <a href="https://www.uct.ac.za/" target="_blank" style={linkStyle}>University of Cape Town</a>, with a solid foundation in cloud computing, particularly in the <a href='https://aws.amazon.com/?nc2=h_lg' target='_blank' style={linkStyle}>Amazon Web Services (AWS)</a> cloud environment. My cloud computing competency is backed by the AWS Cloud Practitioner, AWS Solutions Architect Associate and HashiCorp Terraform Associate (003) certifications I have attained (refer to the <Link to="certifications" spy={true} smooth={true} duration={500} style={linkStyle}>
                 CERTIFICATIONS</Link> section to see the complete set of my certifications). 
            </p>
            <p>
              😁 I am someone who is constantly dedicated to growth and improvement, committed to staying up-to-date with industry trends and focusing on continuously enhancing my skills and adapting to new challenges in the fields of cloud computing, software platform administration and development operations (DevOps).
            </p>
            <p>
             🛠️ I have practical experience in containerization with <a href="https://www.docker.com/" target="_blank" style={linkStyle}>Docker</a>, Infrastructure-as-Code (IaC) deployment using <a href='https://www.terraform.io/' target="_blank" style={linkStyle}>Terraform</a>, and scripting automation solutions in <a href='https://www.gnu.org/software/bash/' target="_blank" style={linkStyle}>Bash</a> and <a href='https://www.python.org/' target="_blank" style={linkStyle}>Python</a>. My collaboration skills extend to version control with <a href='https://git-scm.com/' target="_blank" style={linkStyle}>Git</a>.
            </p>
            <p>
              👨🏿‍💻 I currently fulfill the role of DevOps Engineer at <a href="https://barefootcyber.com/" target="_blank" style={linkStyle}> Barefoot Cyber</a>, where my responsibilities include providing microservice-based architecture designs for the company's Security Information and Events Management (SIEM) platform, deploying the SIEM on  AWS infrastructure using Terraform, maintaining Docker deployments, implementing monitoring tools, and collaborating with the Security Operations Center (SOC) team.
            </p>
          </div>
        </Fade>
        <Skills />
      </div>
    </Section>
  )
}

export default About

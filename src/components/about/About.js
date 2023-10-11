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
              ⚡ I am a <a href='https://aws.amazon.com/devops/what-is-devops/' target="_blank" style={linkStyle}> Development-Operations (DevOps)</a> engineer, with a solid foundation in cloud computing, particularly the <a href='https://aws.amazon.com/?nc2=h_lg' target='_blank' style={linkStyle}>Amazon Web Services (AWS)</a> cloud environment. My cloud computing competency is backed by the AWS Cloud Practitioner, AWS Solutions Architect Associate and HashiCorp Terraform Associate (003) certifications I have attained (refer to the <Link to="certifications" spy={true} smooth={true} duration={500} style={linkStyle}>
                 CERTIFICATIONS
              </Link> section to see the complete set of my certifications). I am someone who is constantly dedicated to growth and improvement, committed to staying up-to-date with industry trends and focusing on continuously enhancing my skills and adapting to new challenges in the DevOps field.
            </p>
            <p>
             🛠️ I have practical experience in containerization with <a href="https://www.docker.com/" target="_blank" style={linkStyle}>Docker</a>, Infrastructure-as-Code (IaC) deployment using <a href='https://www.terraform.io/' target="_blank" style={linkStyle}>Terraform</a>, and scripting automation solutions in <a href='https://www.gnu.org/software/bash/' target="_blank" style={linkStyle}>Bash</a> and <a href='https://www.python.org/' target="_blank" style={linkStyle}>Python</a>. My collaboration skills extend to version control with <a href='https://git-scm.com/' target="_blank" style={linkStyle}>Git</a> and agile project management with <a href="https://www.atlassian.com/software/jira?&aceid=&adposition=&adgroup=140479881486&campaign=18442480203&creative=656562805651&device=c&keyword=jira&matchtype=e&network=g&placement=&ds_kids=p73335832032&ds_e=GOOGLE&ds_eid=700000001558501&ds_e1=GOOGLE&gclid=CjwKCAjwyY6pBhA9EiwAMzmfwYNplBUT2yc8bGG-5zHsrAEY80t5i8JFS44cDe2LrK5KUCPRDEemiRoCzxcQAvD_BwE&gclsrc=aw.ds" target="_blank" style={linkStyle}>Jira</a>, ensuring effective teamwork.
            </p>
            <p>
              👨🏿‍💻 I'm currently a DevOps Engineer at <a href="https://barefootcyber.com/" target="_blank" style={linkStyle}> Barefoot Cyber </a>, where my responsibilities include providing microservice-based architecture designs for the company's Security Information and Events Management (SIEM) platform, deploying the SIEM on  AWS infrastructure using Terraform, maintaining Docker deployments, implementing monitoring tools, and collaborating with the Security Operations Center (SOC) team.
            </p>
            <p>
              🎓 I'm on the cusp of graduating from the University of Cape Town, armed with a BSc in Geomatics, with a specialization in Geoinformatics and Computer Science.
            </p>

            <p>
              🧗🏿 Beyond tech, I find joy in exploring new places, learning new things/activities and being involved in church activities.
            </p>
          </div>
        </Fade>
        <Skills />
      </div>
    </Section>
  )
}

export default About

import React, { useState } from 'react'
import './Home.css'
import Fade from 'react-reveal/Fade'
import { Bounce } from 'react-reveal'
import { Link } from 'react-scroll'
import Particles from 'react-particles-js'
import Typewriter from 'typewriter-effect'
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle'
import Navbar from '../navbar/Navbar'
import config from '../../config'
import profile from '../../images/profile image.jpeg'
import linkedin from '../../images/social/linkedin.png'
import github from '../../images/social/github.png'
import ReactFloaterJs from 'react-floaterjs'

const Home = () => {
  const [imageLoaded, setImageLoaded] = useState(false)
  return (
    <div className="home-wrapper">
      <div className="home">
        <Particles className="particles" params={config.particles} />
        <div className={`greeting`}>
          <Fade bottom distance="40px">
            {/* <img
              className="profile"
              alt="m.mokubedi profile"
              src={profile}
              onLoad={() => setImageLoaded(true)}
            /> */}
            <h1 className="greeting-text">
              Hello there! <span className="wave-emoji" role="img" aria-label="waving hand">👋🏿</span> 
              <h1>
                <span className="name"> I'm Moloko Mokubedi</span>
              </h1>
            </h1>
            <h1 className="greeting-text">
              Let's embark on a journey in 
              <Typewriter
                options={{
                  strings: [
                    'Cloud Platform!',
                    'Terraform!',
                    'Amazon Web Services!',
                    'Serverless Computing!'
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 10,
                  cursor: '|',
                  delay: 100,
                }}
              />
            </h1>

            <Bounce cascade>
              <div className="links">
                <a
                  href="https://linkedin.com/in/moloko-m-b6a2a298"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedin} alt="Linkedin Logo" width="50px" />
                </a>

                <a
                  href="https://github.com/LokoMoloko98"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={github} alt="Github Logo" width="50px" />
                </a>
              </div>
            </Bounce>

            <div className="scroll-down">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-63}
                duration={500}
              >
                <ArrowDropDownCircleIcon
                  fontSize="small"
                  style={{ pointerEvents: 'fill', cursor: 'pointer' }}
                />
              </Link>
            </div>
          </Fade>
        </div>
        <Navbar />
      </div>
    </div>
  )
}

export default Home 

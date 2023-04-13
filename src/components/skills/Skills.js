import React, { useRef } from 'react'
import IsVisible from 'react-is-visible'
import { Fade } from 'react-reveal'
import { skills } from '../../data/skills.json'
import { useContainerDimensions } from '../../hooks'
import ReactCardFlipper from "react-card-flipper";

const Skills = () => {
  const skillsWrapper = useRef()
  const { width } = useContainerDimensions(skillsWrapper)

  return (
    <Fade duration={1000}>
      <div style={{ position: 'relative', width: '100%', maxWidth: 600 }}>
        <IsVisible once>
          {(isVisibleSkillsWrapper) => (
            <div className="skills-wrapper">
              <h2>Programming Languanges, Tech Tools and Skills</h2>
              <ul className="skills" ref={skillsWrapper}>
                {skills.map((skills) => {
                  return (
                    <li className="skill-bar-wrapper">
                      {
                        <ReactCardFlipper behavior="click" levitate={true}>
                          <div className="skill-name">
                            <h3>{skills.skillName}</h3>
                          </div>
                          <div className="skill-details">
                            <p>{skills.details}</p>
                          </div>
                        </ReactCardFlipper>
                      }
                    </li>
                  )
                })}
              </ul>
            </div>
          )}
        </IsVisible>
      </div>
    </Fade>
  )
}

export default Skills

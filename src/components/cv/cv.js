import React from 'react'
import './cv.css'
import { Fade } from 'react-reveal'
import Section from '../section/Section'



const CV = () => {
  return (
    <Section title="CV">
      <div className='cv'>
        <div className='cv-content'>
          <div className="cv-list" >
            <Fade bottom duration={1000} distance="20px">
              <iframe src=
              "https://molokomokubedi.s3.af-south-1.amazonaws.com/moloko-mokubedi.co.za/Moloko+Mokubedi+CV.pdf"
              width="800"
              height="500">
            </iframe>
            </Fade>
          </div>
          <Fade bottom duration={1200} distance="20px">
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
            </div>
          </Fade>
        </div>
      </div>
    </Section>
  )
}


export default CV

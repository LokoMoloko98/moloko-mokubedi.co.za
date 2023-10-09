import React from 'react'
import './cv.css'
import { Fade } from 'react-reveal'
import Section from '../section/Section'



const CV = () => {
  return (
    <Section title="Curriculum Vitae">
      <div className='certification-content'>
        <div className="certification-list" >
          <Fade bottom duration={1000} distance="20px">
            <iframe src=
              "https://molokomokubedi.s3.af-south-1.amazonaws.com/moloko-mokubedi.co.za/Moloko+Mokubedi+CV.pdf"
              width="800"
              height="500">
            </iframe>
          </Fade>
        </div>
      </div>
    </Section>
  )
}


export default CV

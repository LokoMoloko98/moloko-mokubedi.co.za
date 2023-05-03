import React, { Component } from 'react';
import './Projects.css'
import { Fade } from 'react-reveal'
import Section from '../section/Section'
import { TaggedContentCard } from 'react-ui-cards';
import Carousel from 'react-grid-carousel'
import styled from 'styled-components'

const Container = styled.div
  `position: absolute;
  top: 0;
  left: 0;
  min-height: 100%;
  width: 100%;`


const Row = styled.div`
  max-width: 1100px;
  padding: 0 50px;
  margin: 50px auto;
  @media screen and (max-width: 670px) {
    padding: 0;
  }
`

const ArrowBtn = styled.span
  `display: inline-block;
  position: absolute;
  top: 50%;
  right: ${({ type }) => (type === 'right' ? '-40px' : 'unset')};
  left: ${({ type }) => (type === 'left' ? '-40px' : 'unset')};
  width: 45px;
  height: 45px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  &::after {
    content: '';
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: ${({ type }) =>
    type === 'right'
      ? 'translate(-75%, -50%) rotate(45deg)'
      : 'translate(-25%, -50%) rotate(-135deg)'};
    width: 10px;
    height: 10px;
    border-top: 2px solid #666;
    border-right: 2px solid #666;
  }
  &:hover::after {
    border-color: #333;
  }`


const Card = styled.div
  `margin: 2px;
  background-color: #474f63;
  border-radius: 10px;
  border: 0px  #eaeaea;
  overflow: hidden;
  cursor: pointer;
  transition: box-shadow 0.25s;
  :hover {
    box-shadow: 0 0 2px 0 #00000063;
  }
  a:link { text-decoration: none; }
  a:visited { text-decoration: none; }
  a:hover { text-decoration: none; }
  a:active { text-decoration: none; }`


const Img = styled.div
  `height: 200px;
  margin-bottom: 4px;
  background-image: ${({ img }) => `url(${img})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;`


const Title = styled.div`
  text-align: center;
  margin: 10px 10px 10px;
  font-size: 24px;
  font-weight: bold;
  float: center;
  a:link { text-decoration: none; }
  a:visited { text-decoration: none; }
  a:hover { text-decoration: none; }
  a:active { text-decoration: none; }
`


const Description = styled.div`
text-align: center;  
font-size: 18px;
  font-weight: 400;
  color: #FFFFFF;
  float: center;
  margin: 20px;
  span {
    font-size: 15px;
    color: #26bec9;
  }
  a:link { text-decoration: none; }
  a:visited { text-decoration: none; }
  a:hover { text-decoration: none; }
  a:active { text-decoration: none; }
`

const Projects = () => {

  return (
    <Section title="Projects">
      <div className="projects-content">
        <Fade bottom duration={1000} distance="20px">


          <Carousel
            cols={1}
            rows={1}
            gap={11}
            responsiveLayout={[
              {
                breakpoint: 1200,
                cols: 3
              },
              {
                breakpoint: 990,
                cols: 2
              }
            ]}
            mobileBreakpoint={670}
            arrowRight={<ArrowBtn type="right" />}
            arrowLeft={<ArrowBtn type="left" />}
          >

            <Carousel.Item>
              <a href='https://github.com/LokoMoloko98/Investigating-the-time-efficiency-of-indexing-vector-point-data-via-the-Point-Quadtree' target="_blank" rel="noreferrer">
                <Card>
                  <Img img={'https://molokomokubedi.s3.af-south-1.amazonaws.com/moloko-mokubedi.co.za/projects-images/final+year+project.png'} />
                  <Title>
                  Investigating the time efficiency of indexing vector point data via the Point Quadtree
                  </Title>
                  <Description>
                  The main aim of the project is to investigate the efficiency of the Point Quadtree spatial data structure in inserting and retrieving vector-based spatial data in the context of digital mapping systems, in order to deliver critical data to decision-making stakeholders on time
                  </Description>
                </Card>
              </a>
            </Carousel.Item>

            <Carousel.Item >
              <a href='https://github.com/LokoMoloko98/Orange-Roofs-Object-Detection-OpenCV' target="_blank" rel="noreferrer">
                <Card>
                  <Img img={'https://gisgeography.com/wp-content/uploads/2017/06/OBIA-classification1-1-678x295.png'} />
                  <Title>
                    Orange and Brown Roofs Object-Based Image Detection with OpenCV
                  </Title>
                  <Description>
                    The aim of this Jupyter notebook is to demonstrate a ruleset that detects buildings with a red, brown and orange coloured roofs in an provided detects buildings with red, brown and orange coloured roofs in a provided aerial image. Click on the card to see the Github Repo
                  </Description>
                </Card>
              </a>
            </Carousel.Item>

            <Carousel.Item>
              <a href='https://github.com/LokoMoloko98/ReactJS-Docker-Personal-Website' target="_blank" rel="noreferrer">
                <Card>
                  <Img img={'https://molokomokubedi.s3.af-south-1.amazonaws.com/moloko-mokubedi.co.za/projects-images/Personal+Website.png'} />
                  <Title>
                    Moloko Mokubedi's React.js Website
                  </Title>
                  <Description>
                    My personal website. Built with the React Javascript UI framework and AWS Lambdas.
                  </Description>
                </Card>
              </a>
            </Carousel.Item>
          </Carousel>

        </Fade>
      </div>
    </Section>
  )
}

export default Projects

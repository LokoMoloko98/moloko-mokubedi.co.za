import React, { Component } from 'react';
import './Projects.css'
import { Fade } from 'react-reveal'
import Section from '../section/Section'
import { TaggedContentCard } from 'react-ui-cards';
import Carousel from 'react-grid-carousel'
import styled from 'styled-components'

const linkStyle = {
  fontWeight: 'bold',
  textDecoration: 'none', // Remove underline
  color: 'white', // Default color for unvisited link
  cursor: 'pointer',
};

const credit = {
  textDecoration: 'none', // Remove underline
  color: 'white', // Default color for unvisited link
  cursor: 'pointer',
  fontSize: '10px', // Adjust the font size as needed
  textAlign: 'center',
  verticalAlign: 'bottom',
  fontWeight: "400"
};

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
    <Section title="Personal Projects">
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

            <Carousel.Item >
              <a href='https://terraops-pipeline.moloko-mokubedi.co.za/' target="_blank" rel="noreferrer" style={linkStyle}>
                <Card>
                  <Img img={'https://assets-global.website-files.com/622642781cd7e96ac1f66807/62d0eee28b8758b46548880e_042021-Harness-Blogpost-SEOBLOG-DeploymentPipelinePatterns-Header-p-1600.png'} />
                  <Title>
                    TerraOps Pipeline
                  </Title>
                  <Description>
                  TerraOps Pipeline is an infrastructure automation toolset developed by Moloko Mokubedi that aims to streamline the process of launching containerized applications to IT infrastructure or provisioning cloud resources. TerraOps makes infrastructure provisioning effortless, reliable, and efficient, by utilizing the power of Terraform and modern CI/CD practices. The ECS Edition is the first in a series of TerraOps subprojects.
                  </Description>
                  <p style={credit}>Image Source: harnes.io</p>

                </Card>
              </a>
            </Carousel.Item>

            <Carousel.Item>
              <a href='https://github.com/LokoMoloko98/MERN-Docked' target="_blank" rel="noreferrer" style={linkStyle}>
                <Card>
                  <Img img={'https://merned-dock.s3.af-south-1.amazonaws.com/Mern-ed+Dock.jpg'} />
                  <Title>
                  MERN Docked
                  </Title>
                  <Description>
                  MERN Docked is an innovative open-source project simplifying the deployment of MERN (MongoDB, Express, React, Node.js) stack web applications. Built on Docker, MERN Docked streamlines the creation and management of entire MERN stack environments with just one click.
                  </Description>
                </Card>
              </a>
            </Carousel.Item>

            <Carousel.Item>
              <a href='https://github.com/LokoMoloko98/Investigating-the-time-efficiency-of-indexing-vector-point-data-via-the-Point-Quadtree' target="_blank" rel="noreferrer" style={linkStyle}>
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

            <Carousel.Item>
              <a href='https://github.com/LokoMoloko98/moloko-mokubedi.co.za' target="_blank" rel="noreferrer" style={linkStyle}>
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

import React from 'react'
import './certification.css'
import { Fade } from 'react-reveal'
import Section from '../section/Section'
import { UserCard } from 'react-ui-cards';


const Certification = () => {
  return (
    <Section title="Certifications">
      <div className='certification-content'>
        <div className="certification-list" >
          <Fade bottom duration={1000} distance="20px">
            <a href='https://www.credly.com/badges/a510d676-1ce6-481f-86a8-0e76654b11b5/public_url'
              target="_blank" rel="noreferrer">
              <UserCard
                float
                className="cert-text"
                header='https://logos-world.net/wp-content/uploads/2021/08/Amazon-Web-Services-AWS-Emblem.png'
                avatar='https://molokomokubedi.s3.af-south-1.amazonaws.com/moloko-mokubedi.co.za/Cert+Badges/aws-certified-solutions-architect-associate.png'
                name='AWS Solutions Architect Associate'
                positionName='Click on card to verify proof of certification.' />
            </a>
            <a href='https://www.credly.com/badges/515a9839-27e6-40a0-af4b-2baf4517c082/public_url'
              target="_blank" rel="noreferrer">
              <UserCard
                float
                className="cert-text"
                header='https://logos-world.net/wp-content/uploads/2021/08/Amazon-Web-Services-AWS-Emblem.png'
                avatar='https://molokomokubedi.s3.af-south-1.amazonaws.com/moloko-mokubedi.co.za/Cert+Badges/aws-certified-cloud-practitioner.png'
                name='AWS Certified Cloud Practitioner'
                positionName='Click on card to verify proof of certification.' />
            </a>
            <a href='https://www.credly.com/badges/182a8447-28b8-485c-8904-c3c548b8d242/public_url'
              target="_blank" rel="noreferrer">
              <UserCard
                float
                className="cert-text"
                header='https://redmondmag.com/-/media/ECG/redmondmag/Images/introimages/0507red_azurelogo.jpg'
                avatar='https://molokomokubedi.s3.af-south-1.amazonaws.com/moloko-mokubedi.co.za/Cert+Badges/microsoft-certified-azure-data-fundamentals.png'
                name='Microsoft Certified: Azure Data Fundamentals'
                positionName='Click on card to verify proof of certification.' />
            </a>
            <a href='https://catalog-education.oracle.com/pls/certview/sharebadge?id=8AB76CA1369BE6B5E4FCAF38739791366D380C0A2E868C7873B942518D9ECB9B'
              target="_blank" rel="noreferrer">
              <UserCard
                float
                className="cert-text"
                header='https://molokomokubedi.s3.af-south-1.amazonaws.com/moloko-mokubedi.co.za/Cert+Badges/oracle+dark+bg.png'
                avatar='https://molokomokubedi.s3.af-south-1.amazonaws.com/moloko-mokubedi.co.za/Cert+Badges/50_Oracle_Cloud_Infrastructure.jpg'
                name='Oracle Cloud Infrastructure Foundations'
                positionName='Click on card to verify proof of certification.' />
            </a>
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
    </Section>
  )
}


export default Certification

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
           <a href='https://www.credly.com/badges/7b74e262-adb0-4106-9558-93e6b360de82/public_url'
              target="_blank" rel="noreferrer">
              <UserCard
                float
                className="cert-text"
                header='https://molokomokubedi.s3.af-south-1.amazonaws.com/moloko-mokubedi.co.za/Cert+Badges/terraform_background.png'
                avatar='https://molokomokubedi.s3.af-south-1.amazonaws.com/moloko-mokubedi.co.za/Cert+Badges/hashicorp-certified-terraform-associate-003.png'
                name='HashiCorp Certified: Terraform Associate (003)'
                positionName='Click on card to verify proof of certification.' />
            </a>
            <a href='https://www.credly.com/badges/3accbc26-bb6e-47cc-89a7-378c0d6c3801/linked_in_profile'
              target="_blank" rel="noreferrer">
              <UserCard
                float
                className="cert-text"
                header='https://logos-world.net/wp-content/uploads/2021/08/Amazon-Web-Services-AWS-Emblem.png'
                avatar='https://images.credly.com/size/340x340/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png'
                name='AWS Certified Developer – Associate'
                positionName='Click on card to verify proof of certification.' />
            </a>
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

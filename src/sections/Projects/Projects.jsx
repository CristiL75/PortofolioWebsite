import React from 'react'
import styles from './ProjectStyles.module.css'
import goodcode from '../../assets/goodcode.png'
import ProjectCard from '../../common/ProjectCard'
import fooddonation from '../../assets/fooddonation.png';
import jobplatform from '../../assets/jobplatformphoto.png';
import cryptotransact from '../../assets/cryptotransact.png';

function Projects() {
  return <section id = "projects" className = {StyleSheet.container}>
    <h1 className = "sectionTitle">Projects</h1>
    <div className = {styles.projectsContainer}>
    <ProjectCard src = {goodcode} link = {'https://github.com/CristiL75/goodCodeProject'} h3= 'Good Code' p = 'Algorithmic Problem Solving Platform'/>
    <ProjectCard src = {fooddonation} link = {'https://github.com/CristiL75/DonareMancare'} h3= 'Food Donation' p = 'Food Donation Platform'/>
    <ProjectCard src = {jobplatform} link = {'https://github.com/CristiL75/JobPlatform'} h3= 'Job Listing Platform' p = 'Connecting Talent with Opportunities'/>
    <ProjectCard src = {cryptotransact} link = {'https://github.com/CristiL75/blockchainApp'} h3= 'CryptoTransact' p = 'Secure & Transparent Ethereum Transactions'/>
    </div>
    
    </section>
}

export default Projects
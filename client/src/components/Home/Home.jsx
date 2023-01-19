import { Box, Container } from '@mui/material';
import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import AboutSection from '../Sections/AboutSection';
import ContactSection from '../Sections/ContactSection';
import TecnologiesSection from '../Sections/ExperienceSection';
import HomeSection from '../Sections/HomeSection';
import ProjectsSection from '../Sections/ProjectsSection';






const Home = () => {
    return (
        <Container >

            {/* <Navbar></Navbar> */}
            
                <HomeSection/>
                <Navbar/>
                <AboutSection/>
                <TecnologiesSection/>
                <ProjectsSection/>
                <ContactSection/>
                
            
            <Footer></Footer>
        
        </Container>
    )
}




export default Home;
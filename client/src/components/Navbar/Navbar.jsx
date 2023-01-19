import { Box, Container, IconButton } from '@mui/material';
import React, { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import "./Navbar.css"
import HandymanIcon from '@mui/icons-material/Handyman';





const Navbar = () => {
  const [isActive, setIsActive] = useState("");
  return (
    <Container className='navbarContainer'>
      <Box className='navBox'>

      {/* home */}
      <IconButton onClick={() => setIsActive("#home")} className={isActive === "#home" ? "active" : ""} sx={{color:"#0096c7"}} href="#home">
        <HomeIcon />
      </IconButton>
      {/* about */}
      <IconButton onClick={() => setIsActive("#about")} className={isActive === "#about" ? "active" : ""} href="#about" sx={{color:"#0096c7"}}>
        <PsychologyAltIcon/>
      </IconButton>
      {/* tecnologies */}
      <IconButton onClick={() => setIsActive("#tecnologies")} className={isActive === "#tecnologies" ? "active" : ""} href="#tecnologies" sx={{color:"#0096c7"}}>
        <HandymanIcon/>
      </IconButton>
      {/* pojects */}
      <IconButton onClick={() => setIsActive("#projects")} className={isActive === "#projects" ? "active" : ""} href="#projects" sx={{color:"#0096c7"}}>
        <WorkIcon/>
      </IconButton>
      {/* contact */}
      <IconButton onClick={() => setIsActive("#contact")} className={isActive === "#contact" ? "active" : ""} href="#contact" sx={{color:"#0096c7"}}>
        <EmailIcon/>

      </IconButton>
      </Box>
    </Container>
    )
}


export default Navbar;

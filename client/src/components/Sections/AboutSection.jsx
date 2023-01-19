import { Box, Button, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import AB from "../../assets/fotoportfiolio.jpeg"
import "./AboutSection.css"
import VerifiedIcon from '@mui/icons-material/Verified';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import WorkIcon from '@mui/icons-material/Work';





const AboutSection = () => {
    return(
        <Container sx={{height:"100vh"}} id="about">
            <Box className='container1' >
                <Typography  sx={{color:"white", fontWeight:"200", fontSize:"1.1rem"}} variant='h5'>Get to know</Typography>
                <Typography sx={{color:"#0096c7", fontWeight:"400", fontSize:"2rem"}} variant='h2'>About Me</Typography>
                
                <Box className='contents'>
                    <Box className="imgBox">
                        <img className='aboutImg' src={AB} alt="" />
                    </Box>
                    <Box className='subContents'>
                        <Box className='containerContents'>
                            <Box className='subsubContents'>
                                <VerifiedIcon sx={{color:"#0096c7"}}/>
                                <Typography variant='h6' fontWeight={"400"} sx={{color:"white"}}>Experience</Typography>
                                <Typography variant='h6' fontWeight={"100"} fontSize="1.1rem" sx={{color:"white"}}>+1 year Working </Typography>
                            </Box>
                            <Box className='subsubContents'>
                            <WorkIcon sx={{color:"#0096c7"}}/>
                                <Typography variant='h6' fontWeight={"400"} sx={{color:"white"}}>Projects</Typography>
                                <Typography variant='h6' fontWeight={"100"} fontSize="1.1rem" sx={{color:"white"}}>+4 projects finished</Typography>
                            </Box>
                        </Box>
                        <Box sx={{width:"500px", display:"flex", textAlign:"start"}}>

                            <Typography sx={{color:"white", fontWeight:"200",}} variant='h6'>Hi, im Natal

                                Full Stack developer/front end developer. I love to make dreams reality.
                                </Typography>
                        </Box>
                        <Button href={"#contact"} variant='contained' sx={{color:"black", backgroundColor:"#0096c7", width:"120px",}} 
                        
                        >Let's talk</Button>
                    </Box>
                </Box>
            
            </Box>
        </Container>
        )
}



export default AboutSection;
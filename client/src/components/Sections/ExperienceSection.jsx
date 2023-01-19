import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import VerifiedIcon from '@mui/icons-material/Verified';
import "./ExperienceSection.css"




const TecnologiesSection = () => {
    
    
    
    return(
        <Container className='containerexperiences' sx={{ minHeight:"100vh", }}id="tecnologies">
            <Typography variant='h5' sx={{color:"white", fontWeight:"200", fontSize:"1.1rem"}}>What's skill's I have</Typography>
            <Typography variant='h2' sx={{color:"#0096c7", fontSize:"2rem", fontWeight:"400"}}>My experience</Typography>
            <Box className='experiencesContainer'>
                <Box className='frontend'>
                    <Typography className='experiencetitle' variant='h3' sx={{color:"#0096c7", fontSize:"1.5rem", fontWeight:"400", marginBottom:"25px"}}>Front-End development </Typography>
                    <Box className='frontendcontents'>
                        <article>
                            <VerifiedIcon sx={{color:"white"}}/>
                            <Typography variant='h4' sx={{color:"white", fontWeight:"200", fontSize:"1.1rem", }}>HTML</Typography>
                            <small className='textLigth'>Intermediate</small>
                        </article>
                        <article>
                        <VerifiedIcon sx={{color:"white"}}/>
                            <Typography variant='h4' sx={{color:"white", fontWeight:"200", fontSize:"1.1rem"}}>CSS</Typography>
                            <small className='textLigth'>Intermediate</small>
                        </article>
                        <article>
                        <VerifiedIcon sx={{color:"white"}}/>
                            <Typography variant='h4' sx={{color:"white", fontWeight:"200", fontSize:"1.1rem"}}>JavaScript</Typography>
                            <small className='textLigth'>Intermediate</small>
                        </article>
                        <article>
                        <VerifiedIcon sx={{color:"white"}}/>
                            <Typography variant='h4' sx={{color:"white", fontWeight:"200", fontSize:"1.1rem"}}>ReactJs</Typography>
                            <small className='textLigth'>Intermediate</small>
                        </article>
                        <article>
                        <VerifiedIcon sx={{color:"white"}}/>
                            <Typography variant='h4' sx={{color:"white", fontWeight:"200", fontSize:"1.1rem"}}>MaterialUI</Typography>
                            <small className='textLigth'>Intermediate</small>
                        </article>
                        <article>
                        <VerifiedIcon sx={{color:"white"}}/>
                            <Typography variant='h4' sx={{color:"white", fontWeight:"200", fontSize:"1.1rem"}}>Bootstrap</Typography>
                            <small className='textLigth'>Intermediate</small>
                        </article>
                        <article>
                        <VerifiedIcon sx={{color:"white"}}/>
                            <Typography variant='h4' sx={{color:"white", fontWeight:"200", fontSize:"1.1rem"}}>Redux</Typography>
                            <small className='textLigth'>Intermediate</small>
                        </article>
                    </Box>
                </Box>
                {/* end front end content */}

                <Box className='frontend'>
                    <Typography className='experiencetitle' variant='h3' sx={{color:"#0096c7", fontSize:"1.5rem", fontWeight:"400", marginBottom:"25px"}}>Back-End development </Typography>
                    <Box className='frontendcontents'>
                        <article>
                        <VerifiedIcon sx={{color:"white"}}/>
                            <Typography variant='h4' sx={{color:"white", fontWeight:"200", fontSize:"1.1rem"}}>NodeJs</Typography>
                            <small className='textLigth'>Intermediate</small>
                        </article>
                        <article>
                        <VerifiedIcon sx={{color:"white"}}/>
                            <Typography variant='h4' sx={{color:"white", fontWeight:"200", fontSize:"1.1rem"}}>PostgreSQL</Typography>
                            <small className='textLigth'>Intermediate</small>
                        </article>
                        <article>
                        <VerifiedIcon sx={{color:"white"}}/>
                            <Typography variant='h4' sx={{color:"white", fontWeight:"200", fontSize:"1.1rem"}}>ExpressJs</Typography>
                            <small className='textLigth'>Intermediate</small>
                        </article>
                        
                    </Box>
                </Box>

            </Box>
        </Container>
        )
}



export default TecnologiesSection;
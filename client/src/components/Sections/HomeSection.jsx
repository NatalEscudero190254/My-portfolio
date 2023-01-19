import { Box, Button, Container, IconButton, Typography } from '@mui/material';
import React from 'react';
import CVNatalEsc from "../../assets/CVNatalEsc.pdf"
import ME from '../../assets/Natal.png';
import SocialHeader from '../SocialHeader/SocialHeader';
import "./HomeSection.css"






const HomeSection = () => {
    return(
        <Container
        id="home"
        // sx={{ minHeight:"100vh", }}
        className="container"
        >

        <Box sx={{marginBottom:"3%", display:"flex", flexDirection:"column", paddingTop:"8%"}}>
         <Typography variant='h5' sx={{fontSize:"0.8rem", fontWeight:"bold", marginBottom:"1%", color:"white"}}>Hello, i'm </Typography>  
         <Typography variant='h1' sx={{fontSize:"1.8rem", fontWeight:"bold", marginBottom:"1%", color:"white"}}>Natal Escudero</Typography> 
         <Typography variant='h2' sx={{fontSize:"0.8rem", color:"white" }}>Full Stack Developer</Typography>  
        </Box>



        <Box sx={{display:"flex", flexDirection:"row", gap:"2%", alignItems:"center", justifyContent:"center"}}>
            <Button href={CVNatalEsc} download variant='outlined' sx={{color:"#0096c7"}}>Download CV</Button>
            <Button href={"#contact"} variant='contained' sx={{color:"black", backgroundColor:"#0096c7"}} >Let's talk</Button>
        </Box>
        
        <Box className='socialHeader' >
            <SocialHeader/>
        </Box>
        
           
         {/* <img className='img' src={ME} alt="" /> */}

        <Button className='scrollbtn' href={"#footer"} sx={{color:"#0096c7"}}> Scroll Down</Button>
        
        
        </Container>
        )
}



export default HomeSection;
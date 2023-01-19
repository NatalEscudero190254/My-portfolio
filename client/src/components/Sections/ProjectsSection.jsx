import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';
import landing from "../../assets/landing.jpeg"
import "./ProjectsSection.css"
import aroundtheworld from "../../assets/aroundtheworld.jpeg"
import portfolio from "../../assets/portfolio.png"
import linguini from "../../assets/linguini.jpeg"
import miscusi from "../../assets/miscusi.jpeg"









const ProjectsSection = () => {
    const projects = [
        {
            name:"GameScript",
            image:landing
        },
        {
            name:"Around the world",
            image:landing
        },
        {
            name: "My portfolio",
            image:landing
        }
    ]
    
    return(
        <Container 
        sx={{ minHeight:"100vh", minWidth:"100%",}}
        id="projects">
            <Box >
            <Typography variant='h5' sx={{color:"white", fontWeight:"200", fontSize:"1.1rem"}}>My recent Work</Typography>
            <Typography variant='h2' sx={{color:"#0096c7", fontSize:"2rem", fontWeight:"400"}}>Portfolio</Typography>
            <Box className='cardBox'>
                <Box className="cardcontainer">
                    <Box className='cardimg'>
                        <img src={landing} alt="not found" className='imagen'/>
                    </Box>

                    <Typography sx={{display:"flex", alignItems:"start", padding:"10px", color:"white", fontSize:"1.2rem"}}>
                    GameScript
                    </Typography>

                    <Box sx={{display:"flex", alignItems:"start", gap:"0.5rem", padding:"10px", marginTop:"20px"}}>
                        <Button target={"blank"}  href="https://github.com/NatalEscudero190254/proyecto-final-gameScript"  variant='outlined' sx={{color:"#0096c7"}}>Github</Button>
                        <Button href="https://game-script.netlify.app/" target={"blank"} variant='contained' sx={{color:"black", backgroundColor:"#0096c7"}} >Live Demo</Button>
                    </Box>
                    </Box>
                    {/* segunda card */}
                    <Box className="cardcontainer">
                        <Box className='cardimg'>
                            <img src={aroundtheworld} alt="not found" className='imagen'/>
                        </Box>

                        <Typography sx={{display:"flex", alignItems:"start", padding:"10px", color:"white", fontSize:"1.2rem"}}>
                            Around the World
                        </Typography>

                        <Box sx={{display:"flex", alignItems:"start", gap:"0.5rem", padding:"10px", marginTop:"20px"}}>
                            <Button target={"blank"}  href="https://github.com/NatalEscudero190254/pi-countries-henry"  variant='outlined' sx={{color:"#0096c7"}}>Github</Button>
                            <Button href="https://github.com/NatalEscudero190254/proyecto-final-gameScript" target={"blank"} variant='contained' sx={{color:"black", backgroundColor:"#0096c7"}} >Live Demo</Button>
                        </Box>
      
                    </Box>
                    <Box className="cardcontainer">
                        <Box className='cardimg'>
                            <img src={miscusi} alt="not found" className='imagen'/>
                        </Box>

                        <Typography sx={{display:"flex", alignItems:"start", padding:"10px", color:"white", fontSize:"1.2rem"}}>
                           Miscusi Books
                        </Typography>

                        <Box sx={{display:"flex", alignItems:"start", gap:"0.5rem", padding:"10px", marginTop:"20px"}}>
                            <Button target={"blank"}  href="https://github.com/NatalEscudero190254/pi-countries-henry"  variant='outlined' sx={{color:"#0096c7"}}>Github</Button>
                            <Button href="https://mi-scusi-books.vercel.app/" target={"blank"} variant='contained' sx={{color:"black", backgroundColor:"#0096c7"}} >Live Demo</Button>
                        </Box>
      
                    </Box>
                    
                    {/* tercera card */}
                    <Box className="cardcontainer">
                        <Box className='cardimg'>
                            <img src={portfolio} alt="not found" className='imagen'/>
                        </Box>

                        <Typography sx={{display:"flex", alignItems:"start", padding:"10px", color:"white", fontSize:"1.2rem"}}>
                            My portfolio
                        </Typography>

                        <Box sx={{display:"flex", alignItems:"start", gap:"0.5rem", padding:"10px", marginTop:"20px"}}>
                            <Button target={"blank"}  href="https://github.com/LeandroLagreca/proyecto-final"  variant='outlined' sx={{color:"#0096c7"}}>Github</Button>
                            <Button href="https://game-script.vercel.app/home" target={"blank"} variant='contained' sx={{color:"black", backgroundColor:"#0096c7"}} >Live Demo</Button>
                        </Box>
            
                    </Box>
                    {/* cuarta card */}
                    <Box className="cardcontainer">
                        <Box className='cardimg'>
                            <img src={linguini} alt="not found" className='imagen'/>
                        </Box>

                        <Typography sx={{display:"flex", alignItems:"start", padding:"10px", color:"white", fontSize:"1.2rem"}}>
                            Linguini's Recipes
                        </Typography>

                        <Box sx={{display:"flex", alignItems:"start", gap:"0.5rem", padding:"10px", marginTop:"20px"}}>
                            <Button target={"blank"}  href="https://github.com/NatalEscudero190254/pi-countries-henry"  variant='outlined' sx={{color:"#0096c7"}}>Github</Button>
                            <Button href="https://foods-pi.vercel.app/" target={"blank"} variant='contained' sx={{color:"black", backgroundColor:"#0096c7"}} >Live Demo</Button>
                        </Box>
      
                    </Box>
                    {/*quinta card */}
                    <Box className="cardcontainer">
                        <Box className='cardimg'>
                            <img src={"https://cdn.dribbble.com/userupload/4170049/file/original-1c520cb30a027e7b020fb8022b5e9804.png?compress=1&resize=1200x900"} alt="not found" className='imagen'/>
                        </Box>

                        <Typography sx={{display:"flex", alignItems:"start", padding:"10px", color:"white", fontSize:"1.2rem"}}>
                            Web3 project coming soon...
                        </Typography>

                        <Box sx={{display:"flex", alignItems:"start", gap:"0.5rem", padding:"10px", marginTop:"20px"}}>
                            <Button target={"blank"}  href="https://github.com/LeandroLagreca/proyecto-final"  variant='outlined' sx={{color:"#0096c7"}}>Github</Button>
                            <Button href="https://game-script.vercel.app/home" target={"blank"} variant='contained' sx={{color:"black", backgroundColor:"#0096c7"}} >Live Demo</Button>
                        </Box>
            
                    </Box>
      
            </Box>
            </Box>
        </Container>
        )
}



export default ProjectsSection;
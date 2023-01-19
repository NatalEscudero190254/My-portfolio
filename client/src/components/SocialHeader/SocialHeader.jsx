import { Box, Button, Container, IconButton } from '@mui/material';
import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';




const SocialHeader = () => {
    return (
        <Container sx={{display:"flex", flexDirection:"column", width:"100px"}}>
            <IconButton sx={{color:"#0096c7"}} href="https://www.linkedin.com/in/natal-escudero-0a0020210/"  target="_blank">
                
                    <LinkedInIcon  />
                
            </IconButton>
            <IconButton sx={{color:"#0096c7"}} href="https://github.com/NatalEscudero190254"  target="_blank">
                <GitHubIcon/>
            </IconButton >
            <IconButton href='mailto:natalescudero543@gmail.com' target={"_blank"} sx={{color:"#0096c7"}}>
                <EmailIcon/>
            </IconButton >
            <IconButton href="https://api.whatsapp.com/send?phone=1128706823" target={"_blank"} sx={{color:"#0096c7"}}>
                <WhatsAppIcon/>
            </IconButton>
        </Container>
        )
}


export default SocialHeader;
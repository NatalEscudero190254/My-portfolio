import { Box, Button, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import "./ContactSection.css"
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';





const ContactSection = () => {
    const [result, setResult] = useState(false)
    const [contactInfo, setContactInfo] = useState({
      fullName:"",
      email:""
    })


    function handleChange(e) {
        const value = e.target.value;
        const name = e.target.name;
    
        setContactInfo((prev) => ({
          ...prev,
          [name]: value,
        }));
      }


      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_dnv4ntv', 'template_hnrenol', e.target, '4zpSHHNBQ0hkdXKkq')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          setResult(true)
          Swal.fire({
            icon:"success",
            text:"Your message has been successfully sent. I will contact you soon!"
          })
      };
   
    return(
        <Container 
        sx={{ minHeight:"100vh"}}
        id="contact">
        <form onSubmit={sendEmail}>
            <Typography variant='h5' sx={{color:"white", fontWeight:"200", fontSize:"1.1rem"}}>get in touch</Typography>
            <Typography variant='h2' sx={{color:"#0096c7", fontSize:"2rem", fontWeight:"400"}}>Contact Me</Typography>
            <Box sx={{display:"flex", flexDirection:"row", justifyContent:"center", gap:"5rem", marginTop:"50px"}}>

                <Box sx={{display:"flex", flexDirection:"column", gap:"2rem"}}>
                    <Box className='contactbox'>
                         <EmailIcon/>
                         <Typography>Email</Typography>
                         <Typography>natalescudero543@gmail.com</Typography>
                         <Button href='mailto:natalescudero543@gmail.com' target={"_blank"}>Send a message</Button>



                    </Box>
                    <Box className='contactbox'>
                         <LinkedInIcon/>
                         <Typography>LinkedIn</Typography>
                         <Typography>Natal Escudero</Typography>
                         <Button href={"https://www.linkedin.com/in/natal-escudero-0a0020210/"} target="_blank">Send a message</Button>



                    </Box>
                    <Box className='contactbox'>
                         <WhatsAppIcon/>
                         <Typography>WhatsApp</Typography>
                         <Typography>+54 112870-6823</Typography>
                         <Button href="https://api.whatsapp.com/send?phone=1128706823" target="_blank">Send a message</Button>



                    </Box>
                </Box>
                <Box sx={{display:"flex", flexDirection:"column", width:"50%", gap:"2rem"}}>
                    <TextField
                    placeholder='Your full name'
                    InputProps={{ inputProps: { style: { color: 'white' }}}}
                    focused
                    name='fullName'
                    onChange={handleChange}
                    />
                     <TextField
                    placeholder='Your number'
                    InputProps={{ inputProps: { style: { color: 'white' }}}}
                    focused
                    name='phone'
                    onChange={handleChange}
                    

                    />
                    <TextField
                    placeholder='Your email'
                    InputProps={{ inputProps: { style: { color: 'white' }}}}
                    focused
                    name='email'
                    onChange={handleChange}

                    />
                    <TextField
                    placeholder='Your message'
                    multiline
                    rows={6}
                    InputProps={{ inputProps: { style: { color: 'white' }}}}
                    focused
                    name='message'
                    />
                   <Button type='submit' variant='contained' sx={{color:"black", backgroundColor:"#0096c7", width:"35%"}} >Send message</Button>



                </Box>
            </Box>
        </form>   
        
        
        </Container>
        )
}



export default ContactSection;
import React from 'react';
import { IconButton, Box, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import image from '../assets/funnyDog.png'; // Adjust the path to where the image is stored

const Footer = () => {
  const iconStyles = {
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.2)',
      boxShadow: '0 0 10px 5px rgba(255, 255, 255, 0.7)', // Glowing effect
    },
  };

  return (
    <Box
      component="footer"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem',
        backgroundColor: '#0d0d14',
        color: '#fff',
        flexWrap: 'wrap',
      }}
      id='contact'
    >
      {/* Left Side: Image and Quote */}
      <Box sx={{ display: 'flex', alignItems: 'center', maxWidth: '50%' }}>
        <img
          src={image}
          alt="Funny Dog at Computer"
          style={{ width: '80px', height: '80px', marginRight: '1rem', borderRadius: '50%' }}
        />
        <Typography variant="body1" sx={{ fontStyle: 'italic', fontSize: '1.2rem' }}>
          "It works on my machine."
        </Typography>
      </Box>

      {/* Center: Icons */}
      <Box sx={{ display: 'flex', gap: '1rem' }}>
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/hendili-med-aziz-9b3474195/"
          target="_blank"
          sx={iconStyles}
          aria-label="LinkedIn"
        >
          <LinkedInIcon sx={{ color: '#0A66C2', fontSize: '2rem' }} />
        </IconButton>
        <IconButton
          component="a"
          href="https://github.com/HendiliMohamedAziz"
          target="_blank"
          sx={iconStyles}
          aria-label="GitHub"
        >
          <GitHubIcon sx={{ color: '#fff', fontSize: '2rem' }} />
        </IconButton>
        <IconButton
          component="a"
          href="mailto:aziz.hendili3@gmail.com"
          target="_blank"
          sx={iconStyles}
          aria-label="Gmail"
        >
          <EmailIcon sx={{ color: '#EA4335', fontSize: '2rem' }} />
        </IconButton>
      </Box>

      {/* Right Side: Name */}
      <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '1.5rem', textAlign: 'right', flexShrink: 0 }}>
        Mohamed Aziz Hendili - 2024
      </Typography>
    </Box>
  );
};

export default Footer;

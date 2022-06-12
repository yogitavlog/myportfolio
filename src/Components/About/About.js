import React from 'react'
import { Grid, Typography, Button } from '@mui/material'
import { styled } from '@mui/material/styles';
import DownloadIcon from '@mui/icons-material/Download';
import './About.css'
import { Developer } from '../Images/Allsvg';
import { motion } from "framer-motion";
import { Box } from '@mui/system';
import Fade from 'react-reveal/Fade';

const ResumeButton = styled(Button)({
  color: "#ffc200",
  border: "1px solid #ffc200",
  textTransform: "capitalize",
  fontSize: "16px",
  cursor: "pointer",
  fontFamily: "Maven Pro",
  padding: "0.3rem 1rem",
  "&:hover": {
    backgroundColor: "rgba(255, 194, 0, 0.07)",
    transition: "all 0.3s linear",
  },
  "&:focus": {
    backgroundColor: "rgba(255, 194, 0, 0.07)"
  },

})


function About() {
  return (
    <motion.div
      initial={{ y: 300, x: 0, backgroundColor: [], opacity: 0, }}
      animate={{ y: 0, x: 0, backgroundColor: [], opacity: 1, }}
      transition={{ ease: "easeOut", duration: 1, delay: 2.2 }}
    >
      <Box
        paddingTop={{ xxs: "8vh", xs: "8vh", sm:"9vh", md:"18vh", lg: "18vh" }}
        sx={{ minHeight: "100vh", color: "#fff" }} id="about">
        <Grid container
          direction="row"
          justifyContent="center"
          alignItems="center"
          paddingX={{ xxs: "2rem", md: "8rem" }}
          className="aboutContainer"
        >
          <Grid item sm={12} md={12} lg={6} direction="column" className="bio">
            <Box sx={{ padding: "2rem 0 2rem 2rem" }}>
              <Typography
                variant="h1"
                className="animated animated-text"
              >
                <span>Hi, I'm </span>
                <Box className="animated-info" >
                  <span className="animated-item">Yogita Varshney</span>
                  <span className="animated-item">Web Developer</span>
                </Box>
              </Typography>
            </Box>
            <Box sx={{ paddingLeft: "2rem" }}>
              <Typography variant="p">
                A Front-end Developer specialised in building web applications
                using a wide range of skills sets like HTML, CSS, JavaScript, React.js, etc.<br />
                Also, built single-page applications (SPA), responsive web design, and
                UI using React.js and Material UI.
              </Typography>
            </Box>
            <Box sx={{ padding: "1.5rem 0 0 2rem" }}>
              <ResumeButton
                disableRipple
                endIcon={<DownloadIcon />}
              >
                <a href="https://drive.google.com/file/d/1j4TZiLp1k5TlX3iYzDCSwRDiTh38VccM/view?usp=sharing" target="_blank" className='resume'>
                  Resume
                </a>
              </ResumeButton>
            </Box>
          </Grid>
          <Grid item sm={12} md={12} lg={6}
            sx={{ paddingTop: "4rem" }}
            className="femaleDev"
          >
            <Box>
              <Developer height="350px" width="600px" className="webDev" />
            </Box>

          </Grid>
        </Grid>
      </Box>
    </motion.div>
  )
}

export default About

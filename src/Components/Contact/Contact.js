import React from 'react';
import { Grid, Typography, Button, Stack } from '@mui/material';
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';
import './Contact.css';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Twitter, SocialGithub, LinkedIn, Instagram } from "../Images/Allsvg";

const HelloButton = styled(Button)({
    color: "#ffc200",
    border: "1px solid #ffc200",
    textTransform: "capitalize",
    fontSize: "16px",
    cursor: "pointer",
    fontFamily: "Maven Pro",
    padding: "0.3rem 1rem",
    marginBottom: "1rem",
    "&:hover": {
        backgroundColor: "rgba(305, 194, 0, 0.07)",
        transition: "all 0.3s linear",
    },
    "&:focus": {
        backgroundColor: "rgba(305, 194, 0, 0.07)"
    },

})


function Contact() {
    return (
        <>
            <Box
                paddingTop={{ xxs:"8vh", xs:"8vh", sm:"10vh", md:"16vh", lg: "16vh" }}
                sx={{ minHeight: "100vh" }} id="contact">
                <Fade left cascade>
                    <Grid container
                        direction={"row"}
                        paddingX={{ xxs: "2rem", md: "8rem" }}
                        textAlign={{ xxs: "center", xs: "center", sm: "center", md: "left", lg: "left" }}
                        display="flex"
                        justifyContent="flex-start"
                        alignItems="center"
                        marginBottom={"3rem"}
                    >
                        <Typography variant='h1' width={"100%"} className="contact">CONTACT</Typography>
                    </Grid>
                </Fade>
                <Fade bottom duration={2000} distance="20px">
                    <Grid
                        container
                        direction={"column"}
                        paddingX={{ xxs: "1rem", md: "8rem" }}
                        textAlign="center"
                        sx={{ fontFamily: "Maven Pro" }}
                    >
                        <Typography
                            fontSize={{ xxs: "2rem", lg: "2.2rem" }}
                            sx={{
                                color: "#FFF",
                                letterSpacing: "0.01em",
                                marginBottom: "1rem",
                                fontFamily: "Open Sans"
                            }}
                        >
                            GET IN TOUCH
                        </Typography>
                        <Typography variant='p' sx={{ marginBottom: "1rem" }}>
                            I'm currently looking for any new opportunities,
                            <br /> my inbox is always open. <br />
                            Whether you have a question or just want to say hi,
                            <br /> I'll try my best to get back to you!
                        </Typography>
                        <Box>
                            <HelloButton
                                disableRipple
                                href={"mailto:yogitavarshney1999@gmail.com"}
                                target="_blank"
                                rel="noreferrer"
                                className='helloBtn'
                            >
                                Say Hello
                            </HelloButton>
                        </Box>
                        <Box className="mobile_buttons">
                            <Stack
                                direction={"row"}
                                paddingTop={5}
                                spacing={3}
                                justifyContent={"center"}
                                alignItems={"center"}
                            >
                                <Zoom>
                                    <a
                                        style={{ color: "inherit" }}
                                        target="_blank"
                                        href="https://github.com/yogitavlog"
                                        rel="noreferrer"
                                    >
                                        <SocialGithub width={30} height={30} className='mobile-icons' />
                                    </a>
                                </Zoom>
                                <Zoom>
                                    <a
                                        style={{ color: "inherit" }}
                                        target="_blank"
                                        href="https://www.instagram.com/yogitavarshney1999/"
                                        rel="noreferrer"
                                    >
                                        <Instagram width={30} height={30} className='mobile-icons' />
                                    </a>
                                </Zoom>
                                <Zoom>
                                    <a
                                        style={{ color: "inherit" }}
                                        target="_blank"
                                        href="https://twitter.com/YogitaVarshney4"
                                        rel="noreferrer"
                                    >
                                        <Twitter width={30} height={30} className='mobile-icons' />
                                    </a>
                                </Zoom>
                                <Zoom>
                                    <a
                                        style={{ color: "inherit" }}
                                        target="_blank"
                                        href="https://www.linkedin.com/in/yogita-varshney-5a42401b5/"
                                        rel="noreferrer"
                                    >
                                        <LinkedIn width={30} height={30} className='mobile-icons' />
                                    </a>
                                </Zoom>
                            </Stack>
                        </Box>
                        {/* <Footer /> */}
                        <Box marginTop={"20vh"}>
                            <Typography
                                sx={{
                                    color: "#fff",
                                    opacity: "0.7",
                                    fontSize: "17px",
                                    fontWeight: "300",
                                    lineHeight: "1.5",
                                    fontFamily: "Maven Pro",
                                }}
                            >
                                Made with<span><FavoriteIcon className='heart' /></span>By Yogita Varshney
                            </Typography>
                        </Box>
                    </Grid>
                </Fade>
            </Box>
        </>
    )
}

export default Contact;

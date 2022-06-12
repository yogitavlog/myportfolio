import { Grid, Typography, Stack } from '@mui/material';
import Divider from '@mui/material/Divider';
import { Box } from '@mui/system'
import React from 'react'
import { styled } from '@mui/material/styles';
import { SkillSvg, Html5, Css3, Javascript, SymbolReact, Bootstrap, Github, Gear, Responsive, MaterialUI } from '../Images/Allsvg'
import './Skills.css';
import Fade from 'react-reveal/Fade';


const InnerText = styled(Typography)({
    color: "#fff",
    opacity: "0.6",
    fontSize: "14px",
    fontWeight: "500",
    lineHeight: "1.5",
    letterSpacing: "0.01em",
    marginTop: "10px",
    textTransform: "capitalize",
})

function Skills() {
    return (
        <>
            <Box
                paddingTop={{ xxs:"8vh", xs:"8vh", sm:"9vh", md:"16vh", lg: "16vh" }}
                sx={{ minHeight: "100vh" }}
                id="skills"
            >
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

                        <Typography variant='h1' width={"100%"} className="skills">SKILLS</Typography>

                    </Grid>
                </Fade>
                <Fade right duration={3000} distance="30px">
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        paddingX={{ xxs: "1rem", md: "8rem" }}
                    >

                        <Grid item xxs={12} xs={12} sm={12} md={12} lg={4} className="skillSvgConatiner">
                            <Box >
                                <SkillSvg className="skillDev" />
                            </Box>
                        </Grid>

                        <Grid item xxs={12} xs={12} sm={12} md={12} lg={8} className="skillContainer">
                            <Stack sx={{ marginTop: "20px", color: "gray", display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                                <Box className="skillItem">
                                    <Html5 height="40px" fill="#ffc200" />
                                    <InnerText>HTML5</InnerText>
                                </Box>
                                <Box className="skillItem">
                                    <Css3 height="40px" fill="#ffc200" />
                                    <InnerText>CSS3</InnerText>
                                </Box>
                                <Box className="skillItem">
                                    <Javascript height="40px" fill="#ffc200" />
                                    <InnerText>JavaScript</InnerText>
                                </Box>

                                <Box className="skillItem">
                                    <SymbolReact height="40px" fill="#ffc200" />
                                    <InnerText>React</InnerText>
                                </Box>
                                <Box className="skillItem">
                                    <Bootstrap height="40px" fill="#ffc200" />
                                    <InnerText>Bootstrap</InnerText>
                                </Box>
                                <Box className="skillItem">
                                    <MaterialUI height="40px" fill="#ffc200" />
                                    <InnerText>Material UI</InnerText>
                                </Box>

                                <Box className="skillItem">
                                    <Github height="40px" fill="#ffc200" />
                                    <InnerText>Github</InnerText>
                                </Box>
                                <Box className="skillItem">
                                    <Gear height="40px" fill="#ffc200" />
                                    <InnerText>REST API</InnerText>
                                </Box>
                                <Box className="skillItem">
                                    <Responsive height="40px" fill="#ffc200" />
                                    <InnerText>Responsive Designs</InnerText>
                                </Box>

                            </Stack>
                        </Grid>

                    </Grid>
                </Fade>
            </Box>
        </>
    )
}

export default Skills

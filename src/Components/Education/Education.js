import React from 'react';
import { borderRadius, Box } from '@mui/system';
import { Grid, Typography, Stack, Button } from '@mui/material';
import Uptu_logo from '../../Assets/Images/uptu_logo.png';
import Crio_logo from '../../Assets/Images/crio_logo.png';
import { RightArrow, UpArrow } from '../Images/Allsvg';
import { styled } from '@mui/material/styles';
import { Link } from 'react-scroll';
import './Education.css';
import { Fade, Flip } from 'react-reveal';

const VisitButton = styled(Button)({
    color: "#ffc200",
    opacity: "0.9",
    border: "1px solid #ffc200",
    textTransform: "capitalize",
    fontSize: "16px",
    cursor: "pointer",
    fontFamily: "Maven Pro",
    padding: "0.3rem 1rem",
    marginBottom: "1rem",
    "&:hover": {
        backgroundColor: "rgba(255, 194, 0, 0.07)",
        transition: "all 0.3s linear",
    },
    "&:focus": {
        backgroundColor: "rgba(255, 194, 0, 0.07)"
    },

})

const CustomGrid = styled(Grid)({
    boxShadow: "2px 2px 10px #000",
    borderRadius: "8px"
})

const CustomText = styled(Typography)({
    fontSize: "17px",
    fontWeight: "600",
    fontFamily: "Maven Pro",
    letterSpacing: "0",
})


function Education() {
    return (
        <>
            <Box
                paddingTop={{ xxs:"8vh", xs:"8vh",sm:"9vh", md:"16vh", lg: "16vh" }}
                sx={{ minHeight: "100vh", marginBottom: "2rem" }}
                id="education"
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
                        <Typography variant='h1' width={"100%"} className="education">EDUCATION</Typography>
                    </Grid>
                </Fade>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    paddingX={{ xxs: "1rem", xs: "4rem", md: "6rem", lg: "8rem" }}

                >
                    <Grid item
                        xs={12} md={3} lg={2}
                        spacing={2}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                        paddingBottom={{ xxs: "1rem" }}
                    >
                        <Flip left duration={2000}>
                            <Box className="logoHead">
                                <img src={Uptu_logo} id="uptu_logo" title='UPTU_Logo' />
                            </Box>
                        </Flip>
                    </Grid>
                    <Grid item xs={12} md={9} lg={10} >
                        <Fade right duration={1000} distance={"20px"}>
                            <CustomGrid>
                                <Stack direction={"column"}>
                                    <Box

                                        sx={{
                                            backgroundColor: "#ffc200",
                                            opacity: "0.9",
                                            color: "#000",
                                            padding: "1rem 2rem ",
                                            borderTopLeftRadius: "8px",
                                            borderTopRightRadius: "8px",
                                            display: "flex",
                                            justifyContent: "space-between",
                                        }}
                                        flexDirection={{ xxs: "column", xs: "column", sm: "column", md: "column", lg: "row" }}
                                    >
                                        <Box>
                                            <CustomText>Dr. A.P.J. Abdul Kalam Technical University, Lucknow</CustomText>
                                            <CustomText>B.Tech in Computer Science</CustomText>
                                        </Box>
                                        <Box>
                                            <CustomText>2017-2021</CustomText>
                                        </Box>

                                    </Box>
                                    <Box sx={{ padding: "0.5rem 2rem", }}>
                                        <Typography
                                            fontSize={{ xxs: "0.75rem", xs: "1rem" }}
                                            fontFamily={"Maven Pro"}

                                        >
                                            <span><RightArrow width="10px" height="10px" fill="#ffc200" /></span>{" "}
                                            <span style={{
                                                color: "#fff",
                                                opacity: "0.5",
                                            }}
                                            >
                                                I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, COA, AI etc.
                                            </span>
                                        </Typography>

                                        <Typography
                                            fontSize={{ xxs: "0.75rem", xs: "1rem" }}
                                            fontFamily={"Maven Pro"}

                                        >
                                            <span><RightArrow width="10px" height="10px" fill="#ffc200" /></span>{" "}
                                            <span
                                                style={{
                                                    color: "#fff",
                                                    opacity: "0.5"
                                                }}
                                            >
                                                Apart from this, I have done Python with Django course.
                                            </span>
                                        </Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "flex-end",
                                            paddingX: "2rem"
                                        }}
                                    >
                                        <VisitButton disableRipple><a href="https://aktu.ac.in/" target="_blank" className="websiteVisit">Visit Website</a></VisitButton>
                                    </Box>
                                </Stack>
                            </CustomGrid>
                        </Fade>
                    </Grid>
                </Grid>

                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    marginTop="3rem"
                    paddingX={{ xxs: "1rem", xs: "4rem", md: "6rem", lg: "8rem" }}
                >
                    <Grid item
                        xs={12} md={3} lg={2}
                        spacing={2}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                        paddingBottom={{ xxs: "1rem" }}
                    >
                        <Flip left duration={2000}>
                            <Box className="logoHead">
                                <img src={Crio_logo} id="crio_logo" title='CRIO_Logo' />
                            </Box>
                        </Flip>
                    </Grid>

                    <Grid item xs={12} md={9} lg={10}>
                        <Fade right duration={1000} distance={"20px"}>
                            <CustomGrid>
                                <Stack direction={"column"}>
                                    <Box
                                        sx={{
                                            backgroundColor: "#ffc200",
                                            opacity: "0.9",
                                            color: "#000",
                                            padding: "1rem 2rem",
                                            borderTopLeftRadius: "8px",
                                            borderTopRightRadius: "8px",
                                            display: "flex",
                                            justifyContent: "space-between"
                                        }}
                                        flexDirection={{ xxs: "column", xs: "column", sm: "column", md: "column", lg: "row" }}
                                    >
                                        <Box>
                                            <CustomText>Crio.Do E-Learning Platform, Bengaluru</CustomText>
                                            <CustomText>Software Development Program</CustomText>

                                        </Box>
                                        <Box>
                                            <CustomText>2021-Present</CustomText>
                                        </Box>
                                    </Box>
                                    <Box sx={{ padding: " 0.5rem 2rem" }}>
                                        <Typography
                                            fontSize={{ xxs: "0.75rem", xs: "1rem" }}
                                            fontFamily={"Maven Pro"}
                                        >
                                            <span><RightArrow width="10px" height="10px" fill="#ffc200" /></span>{" "}
                                            <span
                                                style={{
                                                    color: "#fff",
                                                    opacity: "0.5"
                                                }}
                                            >
                                                Currently, I am doing a Learning Program as a Full Stack Developer.
                                            </span>
                                        </Typography>
                                        <Typography
                                            fontSize={{ xxs: "0.75rem", xs: "1rem" }}
                                            fontFamily={"Maven Pro"}
                                        >
                                            <span><RightArrow width="10px" height="10px" fill="#ffc200" /></span>{" "}
                                            <span
                                                style={{
                                                    color: "#fff",
                                                    opacity: "0.5"
                                                }}
                                            >
                                                I have worked on multiple real-world projects using JavaScript along with React.Js{" "}
                                            </span>
                                            <span>
                                                <Link to="projects" spy={true} smooth={true} offset={20} duration={500}>
                                                    <UpArrow width="22px" height="22px" fill={"#ffc200"} className="ArrowUp" />
                                                </Link>

                                            </span>
                                        </Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "flex-end",
                                            paddingX: "2rem"
                                        }}
                                    >
                                        <VisitButton disableRipple><a href="https://www.crio.do/" target="_blank" className="websiteVisit">Visit Website</a></VisitButton>
                                    </Box>
                                </Stack>
                            </CustomGrid>
                        </Fade>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Education

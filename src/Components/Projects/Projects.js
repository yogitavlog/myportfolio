import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import "./Projects.css"
import { styled } from '@mui/material/styles'
import ProjectPage from './ProjectsPage';
import Fade from 'react-reveal/Fade';


function Projects() {
    return (
        <>
            <Box
                paddingTop={{ xxs:"8vh", xs:"8vh", sm:"9vh", md:"16vh", lg: "16vh" }}
                sx={{ minHeight: "100vh", marginBottom: "2rem" }} id="projects">
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
                        <Typography variant='h1' width={"100%"} className="projects">PROJECTS</Typography>
                    </Grid>
                </Fade>
                <Fade bottom duration={2000} distance="50px" >
                    <Grid
                        container
                        justifyContent="center"
                        alignItems="center"
                        sx={{ marginTop: "0.5rem" }}
                    >
                        <ProjectPage />
                    </Grid>

                </Fade>
            </Box>
        </>
    )
}

export default Projects

import { Box, Grid, Stack } from "@mui/material"
import ProjectText from "./ProjectText"
import { Projects } from "./ProjectsData"
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { SocialGithub } from '../Images/Allsvg';
import './ProjectPage.css'

const ProjectPage = () => {
    return (
        <Box width={"90%"}>
            <Grid
                container
                justifyContent="center"
                alignItems="center"
                spacing={2}>
                {Projects.map((project) => {
                    return (
                        <Grid item key={project.id} spacing={2}>
                            <Stack direction={"column"} mt={4} className="projectContainer" spacing={2}>
                                <Box className="Img-Div">
                                    <a
                                        target="_blank"
                                        href={project.link}
                                        rel="noreferrer"
                                    >
                                        <img
                                            src={project.image}
                                            alt={project.alt}
                                            className="projectImg"
                                        />
                                    </a>
                                </Box>
                                <Box className="Project-div">
                                    <ProjectText project={project} />
                                </Box>
                                <Stack direction={"row"} alignItems={"center"} spacing={1}>
                                    <a
                                        target="_blank"
                                        href={project.link}
                                        rel="noreferrer"
                                        className="newTabIcon"
                                    >
                                        <OpenInNewIcon />
                                    </a>
                                    <a
                                        target="_blank"
                                        href="https://github.com/YogitaDev/myportfolio"
                                        rel="noreferrer"
                                    >
                                        {project.id === 1 && <SocialGithub height={"22px"} width={"22px"} className="newTabIcon"/>}
                                    </a>
                                    <a
                                        target="_blank"
                                        href="https://github.com/YogitaDev/html-css-bootstrap-projects/tree/main/Foodie"
                                        rel="noreferrer"
                                    >
                                        {project.id === 6 && <SocialGithub height={"22px"} width={"22px"} className="newTabIcon"/>}
                                    </a>
                                </Stack>
                            </Stack>
                        </Grid>
                    )
                })}
            </Grid>
        </Box >
    )
}

export default ProjectPage;
import React from 'react'
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

const ProjectText = ({ project }) => {
    return (
        <Box sx={{ color: "#fff", height: "150px" }}>
            <Typography
                fontSize={{ xs: "1.3rem" }}
                className="project-name"
                fontWeight={600}
                fontFamily={"Maven Pro"}
                lineHeight={"2em"}
            >
                {project.name}
            </Typography>
            <Typography
                sx={{
                    color: "#fff",
                    opacity: "0.5"
                }}
                fontSize={{ xxs: "0.75rem", xs: "1rem" }}
                fontFamily={"Maven Pro"}
                marginBottom={1}
            >
                {project.detail}
            </Typography>
            <Typography
                fontSize={"1rem"}
                color="#5b5b5b"
                marginBottom={1}
                fontFamily={"Maven Pro"}
            >
                {project.tags}
            </Typography>
        </Box>
    )
}

export default ProjectText;
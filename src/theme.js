import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    typography: {
        h1: {
            fontFamily: "Maven Pro",
            fontSize: "2.32rem",
            fontWeight: "600",
        },
        h4: {
            fontFamily: "Maven Pro",
            fontSize: "2rem",
            letterSpacing: "0.1em",
        },
        p: {
            fontSize: "18px",
            fontWeight: "300",
            lineHeight: "1.5",
            color: "#5b5b5b",
        }
    },
    mode: "dark",
    palette: {
        primary: {
            light: "#45c09f",
            main: "#0c0c0d",
            dark: "#00845c",
            contrastText: "#fff",
        },
        secondary: {
            light: "#45c09f",
            main: "#ffffff",
            dark: "#00845c",
            contrastText: "#fff",
        }
    },
    breakpoints: {
        values: {
            xxs: 0,
            xs: 370,
            sm: 420,
            md: 768,
            lg: 1200,
            xl: 1536,
            mobile: 0,
            tablet: 640,
            laptop: 1024,
            desktop: 1200,
        },
    },
});

export default theme;
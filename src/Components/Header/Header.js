import React, { useState } from 'react'
import { AppBar, Typography, Toolbar, Button, Box } from '@mui/material';
import { Link } from 'react-scroll';
import './Header.css';
import { motion } from "framer-motion";
import { styled } from '@mui/material/styles';
import Sidenav from '../Sidenav/Sidenav';


const Buttondata = styled(Button)({
    color: "#ffffff",
    opacity: " 0.7",
    textTransform: "capitalize",
    fontSize: "14px",
    fontFamily: "Maven Pro",
    fontWeight: "500",
    margin: "5px",
    letterSpacing: "1px",
    transition: "all 0.3s linear",
    position: "relative",
    display: "inline-block",
    transition: "all o.3s linear",
    "&:hover": {
        color: "#ffc200",
        opacity: "0.7"
    },
    "&:active": {
        color: "#ffc200",
    },
    "&:focus": {
        color: "#ffc200",
    }
})


export default function Header() {
    const [navbar, setNavbar] = useState(false);
    const [Toggle, SetToggle] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 20) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }
    window.addEventListener('scroll', changeBackground);

    const handleReload = () => {
        window.location.reload();
    }

    return (
        <motion.div
            initial={{
                y: -300,
                x: 0,
                backgroundColor: [],
                opacity: 0,
            }}
            animate={{
                y: 0,
                x: 0,
                backgroundColor: [],
                opacity: 1,
            }}
            transition={{ ease: "easeOut", duration: 1, delay: 1.2 }}
        >
            <Sidenav Toggle={Toggle} SetToggle={SetToggle}/>
            <AppBar className={navbar ? "navbar active" : "navbar"}>
                <Toolbar 
                    paddingX={{ xxs: "1rem", md: "8rem" }}
                >
                    <Typography
                        variant='h4'
                        sx={{
                            fontFamily: "Dancing Script",
                            color: "#ffc200",
                            opacity: "0.7",
                            cursor: "pointer",
                            "&:hover": {
                                opacity: "0.9",
                            }
                        }}
                        onClick={handleReload}
                    >
                        Yogita
                    </Typography>
                    <Box sx={{ marginLeft: "auto" }} className="NavbarItems">

                        <Buttondata disableRipple className='navBtn'>
                            <Link to="about" spy={true} smooth={true} offset={50} duration={500}>About</Link>
                        </Buttondata>
                        <Buttondata disableRipple className='navBtn'>
                            <Link to="skills" spy={true} smooth={true} offset={10} duration={500}>Skills</Link>
                        </Buttondata>
                        <Buttondata disableRipple className='navBtn2'>
                            <Link to="projects" spy={true} smooth={true} offset={20} duration={500}>Projects</Link>
                        </Buttondata>
                        <Buttondata disableRipple className='navBtn2'>
                            <Link to="education" spy={true} smooth={true} offset={20} duration={500}>Education</Link>
                        </Buttondata>
                        {/* <Buttondata disableRipple className='navBtn2'>
                            <Link to="experience" spy={true} smooth={true} offset={50} duration={500}>Experience</Link>
                        </Buttondata> */}
                        <Buttondata disableRipple className='navBtn2'>
                            <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact</Link>
                        </Buttondata>
                    </Box>
                    <Box className="icon">
                        <Box pl={2}>
                            <div
                                style={{
                                    zIndex: "6",
                                    position: "fixed",
                                    top: "1rem",
                                    right: "1rem",
                                }}
                                className={`nav-icon-5 ${Toggle ? "open" : ""}`}
                                onClick={() => SetToggle(!Toggle)}
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </motion.div>
    )
}

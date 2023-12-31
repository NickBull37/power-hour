import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Box, Typography } from '@mui/material';
import { logo, logo2 } from '../utils/constants';

const Navbar = () => {

    const [sideMenuOpen, setSideMenuOpen] = useState(false);

    function toggleMenu() {
        setSideMenuOpen(!sideMenuOpen);
    }

    useEffect(() => {
        var menu = document.getElementById("sidemenu");
        if (sideMenuOpen) {
            menu.style.right = "0";
        }
        else {
            menu.style.right = "-200px";
        }
    }, [sideMenuOpen])

    return (
        <Box id="header">
            <nav>
                <Link to="/homepage">
                    <Box
                        display="flex" 
                        alignItems="center"
                        gap={2}
                    >
                        <img height="50px" src={logo} alt="logo" />
                        <Typography
                            sx={{
                                fontSize: { xs: '1.375rem', md: '2.25rem' },
                                fontWeight: '600'
                            }}
                        >
                            Power Hour
                        </Typography>
                    </Box>
                </Link>
                <ul id="sidemenu">
                    <li>
                        <Link className="nav-link" to="/powerhour-1">Power Hour 1</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/powerhour-2">Power Hour 2</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/powerhour-3">Power Hour 3</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/powerhour-4">Power Hour 4</Link>
                    </li>
                    <i className="fa-solid fa-xmark" onClick={() => toggleMenu()}></i>
                </ul>
                <i className="fa-solid fa-bars" onClick={() => toggleMenu()}></i>
            </nav>
        </Box>
    );
}

export default Navbar;
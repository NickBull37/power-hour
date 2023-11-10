import React from 'react';
import { Link } from "react-router-dom";
import { Box, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box
            id="footer"
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            justifyContent="center"
            alignItems="center"
            gap={{ xs: 4, md: 8 }}
            p={{ xs: 4, md: 4 }}
        >
            <Typography variant="body2">COPYRIGHT <span>©</span> 2023</Typography>
            <Typography variant="body2">
                <Link to="/homepage">
                    Video List
                </Link>
            </Typography>
            <Typography variant="body2">
                <Link to="/powerhour-1">
                    Power Hour 1
                </Link>
            </Typography>
            <Typography variant="body2">
                <Link to="/powerhour-2">
                    Power Hour 2
                </Link>
            </Typography>
            <Typography variant="body2">
                <Link to="/powerhour-3">
                    Power Hour 3
                </Link>
            </Typography>
            <Typography variant="body2">
                <Link to="/powerhour-4">
                    Power Hour 4
                </Link>
            </Typography>
        </Box>
    );
}

export default Footer;
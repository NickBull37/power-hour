import React from 'react';
import { Box, Typography } from '@mui/material';
import { logo } from '../utils/constants';

const NoAuthNavbar = () => {
    return (
        <Box id="header">
            <nav>
                <Box
                    display="flex" 
                    alignItems="center"
                    gap={2}
                >
                    <img height="35px" src={logo} alt="logo" />
                    <Typography
                        sx={{
                            fontSize: { xs: '1.375rem', md: '1.875rem' },
                            fontWeight: '600'
                        }}
                    >
                        Power Hour
                    </Typography>
                </Box>
            </nav>
        </Box>
    );
}

export default NoAuthNavbar;
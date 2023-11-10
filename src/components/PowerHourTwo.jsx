import React from 'react';
import { Box, Stack, Typography, Card, CardMedia } from '@mui/material';
import { Navbar, Footer } from "../components";
import { powerHour } from '../utils/constants';

const PowerHourTwo = () => {
    return (
        <Stack height="100vh">
            <Navbar />
            <Box
                flexGrow={1}
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{ backgroundColor: "#3e3e41" }}
            >
                <Stack>
                    <Typography variant="h4" sx={{ pb: 1 }}>Power Hour 2</Typography>
                    <Card
                        display="flex"
                        raised={true}
                        elevation={12}
                    >
                        <CardMedia
                            component="video"
                            controls
                            src={powerHour}
                            sx={{
                                width: { xs: "350px", md: "600px" }
                            }}
                        />
                    </Card>
                </Stack>
            </Box>
            <Footer />
        </Stack>
    );
}

export default PowerHourTwo;
import React from 'react';
import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';
import { Box, Stack, Typography, Paper, Button } from '@mui/material';
import { Navbar, Footer } from "../components";

const GradientButton = styled(Button)`
  background: linear-gradient(45deg, #C92A0E 5%, #DE6C29, #4CD3DD, #163CE6);
  border-radius: 3px;
  border: 0;
  color: white;
  height: 48px;
`;

const HomePage = () => {
    return (
        <Stack height="100vh">
            <Navbar />
            <Box
                flexGrow={1}
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{
                    width: "100%",
                    backgroundColor: "#3e3e41"
                }}
            >
                <Stack>
                    <Typography variant="h4" sx={{ mb: 1 }}>Video List</Typography>
                    <Paper
                        elevation={4}
                        sx={{
                            width: { xs: "350px", md: "500px" },
                            p: 4,
                            backgroundColor: "#71717a"
                        }}
                    >
                        <Stack gap={4}>
                            <Link to="/powerhour-1">
                                <GradientButton fullWidth size="large" variant="contained">
                                    Power Hour 1
                                </GradientButton>
                            </Link>
                            <Link to="/powerhour-2">
                                <GradientButton fullWidth size="large" variant="contained">
                                    Power Hour 2
                                </GradientButton>
                            </Link>
                            <Link to="/powerhour-3">
                                <GradientButton fullWidth size="large" variant="contained">
                                    Power Hour 3
                                </GradientButton>
                            </Link>
                            <Link to="/powerhour-4">
                                <GradientButton fullWidth size="large" variant="contained">
                                    Power Hour 4
                                </GradientButton>
                            </Link>
                        </Stack>
                    </Paper>
                </Stack>
            </Box>
            <Footer />
        </Stack>
    );
}

export default HomePage;
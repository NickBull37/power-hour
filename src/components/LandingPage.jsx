import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { styled } from '@mui/material/styles';
import { Box, Stack, Typography, TextField, Button, FormControl, InputLabel, InputAdornment, IconButton, OutlinedInput, Paper } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { NoAuthNavbar } from "../components";

const GradientButton = styled(Button)`
  background: linear-gradient(45deg, #C92A0E, #DE6C29, #4CD3DD, #163CE6);
  border-radius: 3px;
  border: 0;
  color: white;
  height: 48px;
`;

const LandingPage = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [errorState, setErrorState] = useState();
    const [submitting, setSubmitting] = useState(false);

    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const onSubmit = (data) => {
        if (data.password === "swashbucklers") {
            navigate("/homepage");
        } else {
            setErrorState("Incorrect Password");
        }
    };

    return (
        <Stack height="100vh">
            <NoAuthNavbar />
            <Stack
                flexGrow={1}
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{
                    width: "100%",
                    backgroundColor: "#3e3e41"
                }}
            >
                <Stack gap={1}>
                    <Typography variant="h4">
                        Enter Password
                    </Typography>
                    <Paper elevation={12} p={4} sx={{ p: 4 }}>
                        <form id="authenticate" onSubmit={handleSubmit(onSubmit)}>
                            <Stack gap={4} alignItems="center">
                                <FormControl variant="outlined">
                                    <InputLabel htmlFor="password">Password</InputLabel>
                                    <OutlinedInput
                                        id='password'
                                        name='password'
                                        label="Password"
                                        type={showPassword ? 'text' : 'password'}
                                        {...register("password", { required: "Password is required."})}
                                        error={Boolean(errors.password)}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                    <Box
                                        id='errorText'
                                        className='hide-display'
                                        justifyContent={'center'}
                                    >
                                        <Typography className='error-text' sx={{ mt: 1, textAlign: "center", color: "red" }}>{errorState}</Typography>
                                    </Box>
                                </FormControl>
                                <GradientButton
                                    id='submit'
                                    type='submit'
                                    variant="contained"
                                    onClick={() => setSubmitting(!submitting)}
                                    sx={{ width: "180px" }}
                                >
                                    Submit
                                </GradientButton>
                            </Stack>
                        </form>
                    </Paper>
                </Stack>
            </Stack>
        </Stack>
    );
}

export default LandingPage;
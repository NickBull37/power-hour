import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { LandingPage, HomePage, PowerHourOne, PowerHourTwo, PowerHourThree, PowerHourFour } from './components';


const App = () => {
    return (
        <Box sx={{ backgroundColor: "#27272a" }}>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/homepage" element={<HomePage />} />
                <Route path="/powerhour-1" element={<PowerHourOne />} />
                <Route path="/powerhour-2" element={<PowerHourTwo />} />
                <Route path="/powerhour-3" element={<PowerHourThree />} />
                <Route path="/powerhour-4" element={<PowerHourFour />} />
            </Routes>
        </Box>
    );
}

export default App;
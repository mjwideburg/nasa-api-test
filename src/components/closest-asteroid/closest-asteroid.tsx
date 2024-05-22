import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import { getAsteroids } from '../../api/nasa';

const ClosestAsteroid: React.FC = () => {
    const [date, setDate] = useState('');
    const [asteroid, setAsteroid] = useState<{ name: string; distance: number } | null>(null);

    const findClosestAsteroid = async (date: string) => {
        try {
          const data = await getAsteroids(date);
          const asteroids = data.near_earth_objects[date];
          if (!asteroids) {
            return;
          }
    
          // Interview candidate: Implement the logic to find the closest asteroid
          // Iterate through the list of asteroids and find the one with the minimum distance from Earth
          // Once found, update the state with the asteroid's name and its distance(km or miles) from Earth using the setAsteroid

          // documentation: https://proulxp.github.io/CS290-How-To-Guide/neo.html
          // HINTS: close_approach_data and miss_distance
    
        } catch (error) {
          console.error('Error processing asteroid data:', error);
        }
      };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                Find Closest Asteroid
            </Typography>
            <TextField
                label="Date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                InputLabelProps={{
                    shrink: true,
                }}
                sx={{ mb: 2 }}
            />
            <Button variant="contained" color="primary" onClick={() => findClosestAsteroid(date)}>
                Find
            </Button>
            {asteroid && (
                <Box sx={{ mt: 4, textAlign: 'center' }}>
                    <Typography variant="h5">Closest Asteroid on {date}</Typography>
                    <Typography variant="body1">Name: {asteroid.name}</Typography>
                    <Typography variant="body1">Distance: {asteroid.distance} km</Typography>
                </Box>
            )}
        </Box>
    );
};

export default ClosestAsteroid;

import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';

const PhotoOfTheDay: React.FC = ({}) => {
  const [photoData, setPhoto] = useState<any>()

  // Retrieve photo of the day using the existing api getPhotoOfTheDay, it should retrieve when the page loads

  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
      <Typography variant="h2" component="h2">
        Photo Of The Day
      </Typography>
      {/* utilize the card component with media https://mui.com/material-ui/react-card/#media 

      - The card should show a title, the photo, and a description

      */}
    </Container>
  );
};

export default PhotoOfTheDay;
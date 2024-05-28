import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardMedia, Container, Typography } from '@mui/material';

const PhotoOfTheDay: React.FC = ({}) => {
  const [photoData, setPhoto] = useState<any>()

  // Retrieve photo of the day using the existing api getPhotoOfTheDay, it should retrieve when the page loads

  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
      <Typography variant="h2" component="h2">
        Photo Of The Day
      </Typography>
      {photoData && (
        <Card variant="outlined" sx={{ maxWidth: 600, width: '100%', mt: 4 }}>
          <CardHeader title={photoData.title} />
          <CardMedia
            component="img"
            image={photoData.url}
            alt={photoData.title}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {photoData.explanation}
            </Typography>
          </CardContent>
        </Card>
      )}
    </Container>
  );
};

export default PhotoOfTheDay;
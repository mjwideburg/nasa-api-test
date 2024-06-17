import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardMedia, Container, Typography } from '@mui/material';
import { getPhotoOfTheDay } from '../../api/nasa';

const PhotoOfTheDay: React.FC = ({}) => {
  const [photoData, setPhoto] = useState<any>()

  // Retrieve photo of the day using the existing api getPhotoOfTheDay, it should retrieve when the page loads.
  // Ensure that it only runs once, and that we handle the asyncronous call.

  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
      <Typography variant="h4" component="h2">
        Photo Of The Day
      </Typography>
      {photoData && (
        <Card variant="outlined" sx={{ maxWidth: 800, width: '100%', mt: 4, mb:5 }}>
        <CardHeader title={photoData.title} />
        {photoData.media_type === "video" ? (
          <iframe
            src={photoData.url}
            title={photoData.title}
            style={{ width: '100%', height: 300, border: 'none' }}
            allowFullScreen
          />
        ) : (
          <CardMedia
            component="img"
            image={photoData.url}
            alt={photoData.title}
          />
        )}
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
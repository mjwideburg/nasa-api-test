import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1a237e', // NASA blue
    },
    secondary: {
      main: '#ff6f00', // NASA orange
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontWeight: 700,
      color: '#fff',
    },
    h5: {
      color: '#fff',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          margin: '8px',
        },
      },
    },
  },
});

const NavBar: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            NASA Explorer
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 4 }}>
            <Button variant="contained" onClick={() => handleNavigate('/photo-of-the-day')}>
              Photo of the Day
            </Button>
            <Button variant="contained" onClick={() => handleNavigate('/closest-asteroid')}>
              Closest Asteroid
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default NavBar;

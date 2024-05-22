import React from 'react';
import { Box } from '@mui/material';
import NavBar from '../components/nav-bar/nav-bar';

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Box>
      <NavBar />
      {children}
    </Box>
  );
};

export default Layout;
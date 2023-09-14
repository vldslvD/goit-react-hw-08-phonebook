import { Box } from '@mui/material';
import Navigation from 'components/Navigation/Navigation';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Navigation />
      <main>
        <Box sx={{ width:'80%', margin: '0 auto' }}>
          <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
        </Box>
      </main>
    </div>
  );
};
export default Layout;

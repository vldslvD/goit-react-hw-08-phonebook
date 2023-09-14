import { Link } from 'react-router-dom';
import AuthMenu from 'components/AuthMenu/AuthMenu';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/selectors';
import { AppBar, Box, Button, Toolbar } from '@mui/material';

const Navigation = () => {
    const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <AppBar position="static">
      <Toolbar sx={{width:'80%', marginLeft: "auto", marginRight: "auto"}}>
        {/* <Button component={Link} to="/" color='secondary' sx={{ fontSize: 22, fontWeight: 'medium' }}>Home</Button> */}
        {isLoggedIn && <Button component={Link} to="/contacts" color='secondary' sx={{ fontSize: 22, fontWeight: 'medium' }}>Contacts</Button>}
        <Box sx={{ marginLeft: "auto"}}>
          
      {isLoggedIn ? <UserMenu /> : <AuthMenu />}
      </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Navigation;

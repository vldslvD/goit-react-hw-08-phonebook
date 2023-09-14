import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const AuthMenu = () => {
  return (
    <div>
      <Link to="/register"><Button color= 'secondary' sx={{ fontSize: 22, fontWeight: 'medium' }}>Register</Button></Link>
      <Link to="/login"><Button color= 'secondary' sx={{ fontSize: 22, fontWeight: 'medium' }}>Log in</Button></Link>
    </div>
  );
};
export default AuthMenu;

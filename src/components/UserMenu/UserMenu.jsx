import { Button, Typography, Box} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/operations';
import { getUserName } from 'redux/auth/selectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);
  return (
    <Box sx={{ display: 'flex',  alignItems: 'center', justifyContent:'center'}}>
      <Typography color='secondary' sx={{ fontSize: 22, fontWeight: 'medium', marginRight:'10px'}}> Hello, {userName}</Typography>
      <Button type="button" color='secondary' sx={{ fontSize: 22, fontWeight: 'medium' }} onClick={() => dispatch(logout())}>Log out</Button>
    </Box>
  );
};
export default UserMenu;

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';
import { Box, Button, TextField } from '@mui/material';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        console.log('type is not supported');
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login({ email, password }));
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };
  return (
    <Box sx={{margin: "auto", width:"300px", marginTop:'200px' }}>
    <form action="" onSubmit={handleSubmit}>
      <TextField sx={{width:'100%', marginTop:'20px'}}
        type="email"
        name="email"
        value={email}
        required
        onChange={handleChange}
      />

      <TextField sx={{width:'100%', marginTop:'20px'}}
        type="password"
        name="password"
        value={password}
        required
        onChange={handleChange}
      />
      <Button variant="outlined" sx={{fontSize: '20px',width:'100%', marginTop:'40px'}} type="submit">Log in</Button>
      </form>
      </Box>
  );
};

export default Login;

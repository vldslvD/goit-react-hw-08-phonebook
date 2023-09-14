import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Box, Button, Container, TextField } from '@mui/material';

const Register = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
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
    dispatch(register({ name, email, password }));
    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <Container sx={{ display: 'flex', marginTop: '100px' }}>
      <Box>
        <img width="800px"src={require('../back.jpg')} alt="" />
      </Box>
      <Box sx={{margin: "auto", width:"300px" }}>
      <form action="" onSubmit={handleSubmit}>
      <TextField sx={{width:'100%'}}
        id="outlined-basic"
        type="text"
          name="name"
          variant="outlined"
          label="Name"
        value={name}
        required
        onChange={handleChange}
      />
      <TextField sx={{width:'100%', marginTop:'20px'}}
        type="email"
        name="email"
          value={email}
          variant="outlined"
          label="Email"
        required
        onChange={handleChange}
      />
      <TextField sx={{width:'100%', marginTop:'20px'}}
        type="password"
        name="password"
          value={password}
          variant="outlined"
          label="Password"
        required
        onChange={handleChange}
      />
      <Button variant="outlined" sx={{fontSize: '20px',width:'100%', marginTop:'40px'}} type="submit">Register</Button>
    </form>
    </Box>
    </Container>
  );
};

export default Register;

//vldUser1@mail.com vldUser1
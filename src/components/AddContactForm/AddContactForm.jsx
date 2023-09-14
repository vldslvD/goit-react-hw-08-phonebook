import { useState } from 'react';
import { useDispatch} from 'react-redux';
import { contactsOperations} from 'redux/contacts';
import { Box, Button, TextField, Typography } from '@mui/material';

export const Form = ({ onAdding }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        console.log('type is not supported');
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(contactsOperations.addContact({ name, number }));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };
  return (
    <Box sx={{ width: '80%', margin: '0 auto' }}>
      <Typography color='primary' sx={{marginTop:'20px', marginBottom: '60px',fontSize: '30px',textAlign: 'center'}}> New Contact</Typography>
    <form
      action=""
      onSubmit={e => {
        handleSubmit(e);
        onAdding();
      }}
    >
        <TextField
          sx={{width: '100%', marginBottom: '15px'}}
        type="text"
        name="name"
        value={name}
        label="Name"
        pattern="^[a-zA-Zа-яА-Я]+(([\\' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChange}
      />

        <TextField
          sx={{width: '100%', marginBottom: '15px'}}
        type="tel"
        name="number"
        label="Number"
        value={number}
        pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[.\-\s]?\d{1,4}[.\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleChange}
      />
      <Button fullWidth variant='outlined' sx={{margin: '0 auto'}} type="submit">Add contact</Button>
      </form>
      </Box>
  );
};

import { TextField } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { contactsFilter, getFilter } from 'redux//filter/filterSlice';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
      <TextField
        value={filter}
        label="Find contacts by name"
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([\\' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={e => dispatch(contactsFilter(e.target.value))}
      />  );
};

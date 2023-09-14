import { Contact } from 'components/Contact/Contact';
import { getFilter } from 'redux/filter/filterSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { contactsOperations, contactsSelectors } from 'redux/contacts'
import { Box} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';


import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor:  '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  fontSize: '16px'
}));

export const ContactList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch])

  const contacts = useSelector(contactsSelectors.getContacts);
  const filter = useSelector(getFilter);

  const getFiltered = () => {
    const standartizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(standartizedFilter)
    );
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {getFiltered().map(contact => (
          <Grid xs={2} sm={4} md={4} key={contact.id}>
            <Item><Contact contact={contact}></Contact></Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

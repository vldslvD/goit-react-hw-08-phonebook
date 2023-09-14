import { Button } from './Contact.styled';
import { useDispatch } from 'react-redux';
import { contactsOperations } from 'redux/contacts';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  return (
    <>
      {contact.name}: {contact.number}
      

      <IconButton aria-label="delete" onClick={() => dispatch(contactsOperations.deleteContact(contact.id))}>
  <DeleteIcon />
</IconButton>
    </>
  );
};

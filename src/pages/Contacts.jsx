import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { useState } from 'react';
import { NewContactModal } from 'components/NewContactModal/NewContactModal';
import { Fab, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const Contacts = () => {
  const [isModalShown, setIsModalShown] = useState(false);
  const toggleModal = () => {
    setIsModalShown(!isModalShown);
  };
  return (
    <div>
      <Typography mt={4} mb={4} sx={{fontSize: "40px"}} variant="h1" component='h1'>Phonebook</Typography>
      <Filter />
      {isModalShown && <NewContactModal onClose={toggleModal} />}
      {<Typography mt={2} mb={2} sx={{fontSize: "26px"}} variant="h3" component='h3'>Contacts</Typography>}

      <ContactList />
      <Fab onClick={toggleModal}
        sx={{
          margin: 0,
          top: 'auto',
          left: 'auto',
          bottom: 100,
          right: '10%',
          position: 'fixed',
          color: '#fff'
        }}
        color="primary"
        aria-label="add"
      >
        <AddIcon />
      </Fab>
    </div>
  );
};
export default Contacts;

// WebStudio [HTML, CSS, JS]
// A website for software development company.
// Individual project.
// Simply Chocolate [HTML, CSS, JS]
// Website presenting chocolate products with responsive layout, transform effects, modal windows.
// Role: developer.
// Subscription block, prepare and import all images for the project
// Bookshelf [HTML, CSS, JS, Parcel]
// Application that contains a wide variety of books.
// Role: developer
// My duties: displaying a list of popular books, as well as books when you select the desired category

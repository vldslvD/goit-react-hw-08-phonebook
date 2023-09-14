import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Form } from 'components/AddContactForm/AddContactForm';
import { Box } from '@mui/material';

const modalRoot = document.querySelector('#modal-root');
export const NewContactModal = ({ onClose }) => {
  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };
  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  return createPortal(
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        zIndex: 1200,
      }}
      onClick={handleBackdropClick}
    >
      <Box
        sx={{
          backgroundColor: '#fff',

          width: '300px',
          height: '400px'
        }}
      >
        <Form onAdding={onClose} />
      </Box>
    </Box>,
    modalRoot
  );
};

NewContactModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

import React from 'react';
import { Modal, Box, Tooltip, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const styleModal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: 'translate(-50%, -50%)',
  width: { xs: "100%", sm: "100%", md: "50%" },
  bgcolor: "background.paper",
  p: 3,
  borderRadius: 2,
  display: "flex",
  alignItems: "center"
};

const CertificateModal = ({ open, handleClose, certificate }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={styleModal}>
        <Tooltip title="Close" placement="top" sx={{ position: "relative" }}>
          <IconButton
            onClick={handleClose}
            sx={{ position: "absolute", top: 0, right: 0, width: 24, height: 24 }}
          >
            <CloseIcon sx={{ width: 16, height: 16 }} />
          </IconButton>
        </Tooltip>
        <img src={certificate} alt="certificate" width="100%" />
      </Box>
    </Modal>
  );
}

export default CertificateModal;
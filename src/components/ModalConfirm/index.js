import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { images } from '../../assets';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  borderRadius: '16px',
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center"
};

const ModalConfirm = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="contained" sx={{ width: "230px", borderRadius: "16px" }} onClick={handleOpen}>Finalizar pedido</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img  src={images.modalImg} alt="imagem de pessoas sentadas a mesa"/>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Pedido finalizado com Sucesso!
          </Typography>
          <Typography id="modal-modal-description" variant="subtitle1" sx={{ mt: 2 }}>
            O pedido foi encaminhado para a cozinha.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default ModalConfirm;
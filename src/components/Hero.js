import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Container, Typography, Box, Button, Grid, Modal, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import spifixImage from '../assets/spifix.png'; // Certifique-se de ajustar o caminho para a imagem corretamente

const Hero = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'left',
        py: 10,
        bgcolor: '#0d1117',
        color: 'white',
      }}
    >
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant={isMobile ? 'h3' : 'h1'} component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 4, color: '#F46A35' }}>
              Spifex
            </Typography>
            <Typography variant={isMobile ? 'h5' : 'h4'} component="p" gutterBottom sx={{ mb: 6 }}>
              Integração e Centralização<br />
              Tomar decisões estratégicas com <br />
              base em dados concretos e insights <br />
              avançados, antecipando e <br />
              adaptando-se a cenários futuros <br />
              com confiança.
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 2 }}>
              <Button
                variant="contained"
                color="primary"
                endIcon={<FaArrowRight />}
                sx={{ bgcolor: 'white', color: 'black', px: 4, py: 1.5, borderRadius: 20, '&:hover': { bgcolor: 'gray.200' } }}
              >
                Comece Gratuito
              </Button>
              <Button
                variant="outlined"
                color="primary"
                endIcon={<FaArrowRight />}
                sx={{ color: 'white', borderColor: 'white', px: 4, py: 1.5, borderRadius: 20, '&:hover': { bgcolor: 'white', color: 'black' } }}
              >
                Entre em Contato
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={spifixImage} alt="Spifix" style={{ width: '100%', borderRadius: '20px', cursor: 'pointer' }} onClick={handleOpen} />
          </Grid>
        </Grid>
      </Container>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            bgcolor: 'rgba(0, 0, 0, 0.8)',
          }}
        >
          <img src={spifixImage} alt="Spifix" style={{ maxHeight: '80%', maxWidth: '80%', borderRadius: '20px' }} />
        </Box>
      </Modal>
    </Box>
  );
};

export default Hero;

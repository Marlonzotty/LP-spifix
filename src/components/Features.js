import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import shellLogo from '../assets/shell.jpg'; // Ajuste o caminho conforme necessário
import { Container, Typography, Box, Grid, Avatar, useMediaQuery, useTheme } from '@mui/material';

const Features = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ py: 10, bgcolor: '#202020', color: 'white' }}>
      <Container>
        <Box textAlign="center" mb={8}>
          <Box component="span" sx={{ bgcolor: 'white', color: '#202020', px: 2, py: 1, borderRadius: 1 }}>
            QUEM SOMOS
          </Box>
        </Box>
        <Typography variant={isMobile ? 'h4' : 'h2'} component="h2" textAlign="center" fontWeight="bold" gutterBottom>
          Somos uma plataforma de 
          <Box component="span" sx={{ bgcolor: '#F46A35', color: '#202020', px: 2, py: 1, borderRadius: 1, display: 'inline-block', ml: 1 }}>
            automação de processos
          </Box>
          <br />
          para profissionais de 
          <Box component="span" sx={{ color: '#F46A35', display: 'inline-block', ml: 1 }}>
            contabilidade e finanças
          </Box>.
        </Typography>
        <Grid container spacing={isMobile ? 1 : 2} justifyContent="center" textAlign="center" sx={{ mt: 4, mb: 8 }}>
          {['analistas', 'contadores', 'gerentes', 'controllers', 'diretores', 'CFOs'].map((role) => (
            <Grid item xs={12} sm={6} md={4} key={role}>
              <Box display="flex" alignItems="center" justifyContent="center" color="#F46A35" fontWeight="bold">
                <FaCheckCircle style={{ marginRight: '8px' }} /> {role}
              </Box>
            </Grid>
          ))}
        </Grid>
        <Box textAlign="center" display="flex" alignItems="center" justifyContent="center" color="#F46A35" fontWeight="bold">
          Somos acelerados pela 
          <Avatar src={shellLogo} alt="Shell Logo" sx={{ ml: 2, height: 40, width: 40 }} />
        </Box>
      </Container>
    </Box>
  );
};

export default Features;

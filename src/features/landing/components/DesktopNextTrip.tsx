import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Button, Container, Typography } from '@mui/material';

import { Colors, FontWeights } from '@config/styles';

import planeImage from '../assets/plane.png';

export default function NextTrip() {
  return (
    <Box
      alignContent="center"
      width="100%"
      height="384px"
      sx={{
        backgroundColor: '#92B5582B',
        position: 'relative',
        py: 8,
        overflow: 'hidden',
      }}
    >
      <Box
        component="img"
        src={planeImage}
        alt="Plane path"
        sx={{
          position: 'absolute',
          bottom: '40px',
          left: '-100px',
          width: '761px',
          height: '160px',
          zIndex: -1,
          pointerEvents: 'none',
        }}
      />
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Typography
            variant="h3"
            component="h2"
            sx={{
              color: Colors.primaryGreen,
              fontWeight: FontWeights.medium,
              lineHeight: '55px',
              letterSpacing: '0.15px',
              mb: 4,
            }}
          >
            Let's plan your next trip together?
          </Typography>

          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            sx={{
              bgcolor: Colors.primaryGreen,
              color: 'white',
              px: 4,
              py: 1.5,
              borderRadius: 1,
              '&:hover': {
                bgcolor: '#598b3e',
              },
            }}
          >
            Plan your trip
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

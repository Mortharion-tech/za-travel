import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Button, Container, Typography, useTheme } from '@mui/material';

export default function NextTrip() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: '#e8efe1',
        position: 'relative',
        py: 8,
        overflow: 'hidden',
      }}
    >
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
              color: '#6a994e',
              fontWeight: 500,
              mb: 4,
            }}
          >
            Let's plan your next trip together?
          </Typography>

          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            sx={{
              bgcolor: '#6a994e',
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

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Button, Container, Typography, useTheme } from '@mui/material';

export default function NextTrip() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: '#e8efe1', // Light green background color
        position: 'relative',
        py: 8,
        overflow: 'hidden', // Ensures graphics don't overflow
      }}
    >
      {/* Cloud graphic - top right */}
      <Box
        sx={{
          position: 'absolute',
          top: '15%',
          right: '10%',
          opacity: 0.7,
        }}
      >
        <svg
          width="100"
          height="60"
          viewBox="0 0 100 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M90.1 35.2C92.5 31.7 93.4 27.4 92.4 23.3C91.4 19.2 88.6 15.7 84.8 13.7C81.5 7.5 75.1 3.6 68.3 3.6C61.5 3.6 55.1 7.5 51.8 13.7C48 15.7 45.2 19.2 44.2 23.3C43.2 27.4 44.1 31.7 46.5 35.2C45.2 36.9 44.5 39 44.5 41.2C44.5 46.5 48.9 50.9 54.2 50.9H82.4C87.7 50.9 92.1 46.5 92.1 41.2C92.1 39 91.4 36.9 90.1 35.2Z"
            fill="white"
          />
        </svg>
      </Box>

      {/* Cloud and plane graphic - middle left */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '20%',
          opacity: 0.8,
          transform: 'translateY(-50%)',
        }}
      >
        <svg
          width="180"
          height="80"
          viewBox="0 0 180 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30 40C32.4 36.5 33.3 32.2 32.3 28.1C31.3 24 28.5 20.5 24.7 18.5C21.4 12.3 15 8.4 8.2 8.4C1.4 8.4 -5 12.3 -8.3 18.5C-12.1 20.5 -14.9 24 -15.9 28.1C-16.9 32.2 -16 36.5 -13.6 40C-14.9 41.7 -15.6 43.8 -15.6 46C-15.6 51.3 -11.2 55.7 -5.9 55.7H22.3C27.6 55.7 32 51.3 32 46C32 43.8 31.3 41.7 30 40Z"
            fill="white"
          />
          <path
            d="M110 40L90 35L80 40L70 35L60 40L50 35L45 40L40 37.5L35 40L30 37.5L20 40L10 37.5V42.5L20 45L30 42.5L35 45L40 42.5L45 45L50 42.5L60 45L70 42.5L80 45L90 42.5L110 45V40Z"
            fill="#6a994e"
          />
        </svg>
      </Box>

      {/* Dotted line path */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.4,
          pointerEvents: 'none',
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1400 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 150C200 80 400 220 600 150C800 80 1000 220 1200 150C1400 80 1600 220 1800 150"
            stroke="#6a994e"
            strokeWidth="2"
            strokeDasharray="8 8"
          />
        </svg>
      </Box>

      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            position: 'relative',
            zIndex: 1, // Ensure content is above decorative elements
          }}
        >
          <Typography
            variant="h3"
            component="h2"
            sx={{
              color: '#6a994e', // Green text color matching the plane
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
              bgcolor: '#6a994e', // Green button matching the theme
              color: 'white',
              px: 4,
              py: 1.5,
              borderRadius: 1,
              '&:hover': {
                bgcolor: '#598b3e', // Slightly darker on hover
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

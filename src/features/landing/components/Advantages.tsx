import CameraIcon from '@mui/icons-material/CameraAlt';
import DescriptionIcon from '@mui/icons-material/Description';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {
  Box,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';

import { Colors } from '@config/styles';

export default function Advantages() {
  const theme = useTheme();

  const advantages = [
    {
      icon: <CameraIcon />,
      title: 'Keep memories from the trip',
      description:
        'Keeping your travel photos within your trip-planning app is incredibly practical.',
    },
    {
      icon: <LocationOnIcon />,
      title: 'Add places you want to visit',
      description:
        'Our user-friendly tools help you plan and organize your packing with ease.',
    },
    {
      icon: <DescriptionIcon />,
      title: 'Centralize all your documents',
      description:
        'Simplify Your Life by Bringing Together All Your Essential Documents and Files in a Single, Easily Accessible Location.',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box
        sx={{
          border: '1px solid',
          borderColor: theme.palette.divider,
          borderRadius: 2,
          p: 4,
        }}
      >
        <Stack spacing={6}>
          <Box textAlign="center">
            <Typography
              variant="subtitle1"
              color="primary"
              component="div"
              gutterBottom
            >
              ADVANTAGES
            </Typography>
            <Typography variant="h3" component="h2" color="text.primary">
              Why choose us?
            </Typography>
          </Box>

          <Grid container spacing={4} justifyContent="center">
            {advantages.map((item, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Stack alignItems="center" spacing={2} textAlign="center">
                  <Paper
                    elevation={0}
                    sx={{
                      bgcolor: Colors.primaryBlue,
                      color: 'white',
                      p: 2,
                      borderRadius: 2,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: 56,
                      height: 56,
                    }}
                  >
                    {item.icon}
                  </Paper>
                  <Typography variant="h6" component="h3">
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ maxWidth: 300 }}
                  >
                    {item.description}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Box>
    </Container>
  );
}

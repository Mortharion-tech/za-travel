import CameraIcon from '@mui/icons-material/CameraAlt';
import DescriptionIcon from '@mui/icons-material/Description';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {
  Box,
  Container,
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
    <Container
      sx={{
        width: { xs: '100%', lg: '1720px' },
        height: { xs: 'auto', lg: '465px' },
        maxWidth: { xs: '100%', lg: 'none' },
        py: { xs: 4, lg: 0 },
        px: { xs: 2, lg: 0 },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Stack spacing={{ xs: 4, lg: 8 }} alignItems="center">
          <Box
            sx={{
              width: { xs: '100%', lg: '331px' },
              height: { xs: 'auto', lg: '105px' },
              textAlign: 'center',
            }}
          >
            <Typography
              variant="subtitle1"
              color="primary"
              component="div"
              gutterBottom
              sx={{ textTransform: 'uppercase' }}
            >
              Advantages
            </Typography>
            <Typography variant="h2" component="h2" color="text.primary">
              Why choose us?
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', lg: 'row' },
              width: { xs: '100%', lg: '1506px' },
              height: { xs: 'auto', lg: '296px' },
              justifyContent: { xs: 'center', lg: 'space-between' },
              gap: { xs: 4, lg: 0 },
            }}
          >
            {advantages.map((item, index) => (
              <Box
                key={index}
                sx={{
                  width: { xs: '100%', lg: '446px' },
                  height: { xs: 'auto', lg: '296px' },
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  maxWidth: { xs: '400px', lg: '446px' },
                  mx: { xs: 'auto', lg: 0 },
                }}
              >
                <Stack alignItems="center" spacing={2}>
                  <Paper
                    elevation={0}
                    sx={{
                      bgcolor: Colors.primaryBlue,
                      color: 'white',
                      p: 2,
                      borderRadius: 1,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: 64,
                      height: 64,
                      '& svg': {
                        fontSize: '44px',
                      },
                    }}
                  >
                    {item.icon}
                  </Paper>
                  <Box
                    sx={{
                      width: { xs: '100%', lg: '382px' },
                      gap: '16px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                    }}
                  >
                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{
                        fontWeight: 600,
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        maxWidth: { xs: '100%', lg: '380px' },
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            ))}
          </Box>
        </Stack>
      </Box>
    </Container>
  );
}

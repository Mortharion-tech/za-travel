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
        width: '1720px',
        height: '465px',
        maxWidth: 'none',
        py: 0,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Stack spacing={8} alignItems="center">
          <Box
            sx={{
              width: '331px',
              height: '105px',
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
              width: '1506px',
              height: '296px',
              justifyContent: 'space-between',
            }}
          >
            {advantages.map((item, index) => (
              <Box
                key={index}
                sx={{
                  width: '446px',
                  height: '296px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
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
                      width: '382px',
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
                        maxWidth: '380px',
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

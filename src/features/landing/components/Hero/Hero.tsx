import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {
  Avatar,
  AvatarGroup,
  Box,
  Grid,
  Link,
  Stack,
  Typography,
} from '@mui/material';

import { AppRoutes } from '@config/routes';
import PlaneIcon from '@features/dashboard/components/Hero/PlaneIcon';
import AppButton from '@features/ui/AppButton';

import campingVanImage from '../../assets/camping-van.png';
import citySkylineImage from '../../assets/city-skyline.png';
import oceanCoastImage from '../../assets/ocean-coast.png';

export default function Hero() {
  return (
    <Box sx={{ width: '100%', maxWidth: '1720px', mx: 'auto' }}>
      <Stack direction="row" justifyContent="space-between" spacing={4}>
        <Stack sx={{ width: '668px' }}>
          <Box sx={{ mb: 2 }}>
            <PlaneIcon />
          </Box>

          <Stack sx={{ mb: 4 }}>
            <Typography variant="h1" sx={{ mb: 2 }}>
              Your Ultimate Trip Companion
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
              Welcome to ZaTravel - Your Passport to Seamless Adventures!
              Discover, plan, and track your journeys effortlessly with our
              intuitive web application. Start exploring now!
            </Typography>
          </Stack>

          <Stack direction="row" gap={2} sx={{ mb: 4 }}>
            <AppButton
              variant="contained"
              color="primary"
              LinkComponent={Link}
              href={AppRoutes.addTrip}
              sx={{
                width: '326px',
                height: '56px',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              Plan your trip <ArrowForwardIcon />
            </AppButton>
            <AppButton
              variant="outlined"
              color="primary"
              LinkComponent={Link}
              href={AppRoutes.login}
              sx={{
                width: '326px',
                height: '56px',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              Learn more
            </AppButton>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography variant="body2" fontWeight="medium">
              1200+ users
            </Typography>
            <AvatarGroup max={4} sx={{ mx: 1 }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
              <Avatar
                alt="Trevor Henderson"
                src="/static/images/avatar/5.jpg"
              />
            </AvatarGroup>
            <Typography variant="body2">
              Track their trips in our App.
            </Typography>
          </Stack>
        </Stack>

        <Box sx={{ width: '791px' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  width: '403px',
                  height: '451px',
                  borderRadius: 4,
                  overflow: 'hidden',
                  mb: 2,
                }}
              >
                <Box
                  component="img"
                  src={campingVanImage}
                  alt="Camper van in nature"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Box>
              <Box
                sx={{
                  width: '403px',
                  height: '451px',
                  borderRadius: 4,
                  overflow: 'hidden',
                }}
              >
                <Box
                  component="img"
                  src={oceanCoastImage}
                  alt="Beach with palm tree"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  width: '364px',
                  height: '926px',
                  borderTopRightRadius: 4,
                  borderBottomRightRadius: 4,
                  overflow: 'hidden',
                }}
              >
                <Box
                  component="img"
                  src={citySkylineImage}
                  alt="City skyline at sunset"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </Box>
  );
}

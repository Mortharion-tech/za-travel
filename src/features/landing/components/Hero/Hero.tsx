import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {
  Avatar,
  AvatarGroup,
  Box,
  Container,
  Grid,
  Link,
  Stack,
  Typography,
} from '@mui/material';

import { AppRoutes } from '@config/routes';
import PlaneIcon from '@features/dashboard/components/Hero/PlaneIcon';
import AppButton from '@features/ui/AppButton';
import Logo from '@features/ui/logo/Logo';

import campingVanImage from '../../assets/camping-van.png';
import citySkylineImage from '../../assets/city-skyline.png';
import oceanCoastImage from '../../assets/ocean-coast.png';

export default function Hero() {
  return (
    <>
      <Stack direction="row" sx={{ width: 1720 }}>
        <Stack>
          <PlaneIcon />
          <Stack sx={{ width: 668, height: 636 }}>
            <Typography variant="h1">Your Ultimate Trip Companion</Typography>
            <Typography variant="body1">
              Welcome to ZaTravel - Your Passport to Seamless Adventures!
              Discover, plan, and track your journeys effortlessly with our
              intuitive web application. Start exploring now!
            </Typography>
          </Stack>
          <Stack direction="row" gap={2}>
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
          <Stack direction="row">
            <Typography>1200+ users</Typography>
            <AvatarGroup>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
              <Avatar
                alt="Trevor Henderson"
                src="/static/images/avatar/5.jpg"
              />
            </AvatarGroup>
            <Typography>Track their trips in our App.</Typography>
          </Stack>
        </Stack>
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
                borderRadius: 4,
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
      </Stack>
    </>
  );
}

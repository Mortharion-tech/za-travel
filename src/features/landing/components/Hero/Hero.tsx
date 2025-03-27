import {
  Avatar,
  AvatarGroup,
  Box,
  Grid,
  Stack,
  Typography,
} from '@mui/material';

import PlaneIcon from '@features/dashboard/components/Hero/PlaneIcon';
import AppButton from '@features/ui/AppButton';
import Logo from '@features/ui/logo/Logo';

export default function Hero() {
  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box>
          <Logo />
        </Box>
        <Stack direction="row" gap={2.5}>
          <AppButton>Log in</AppButton>
          <AppButton>Sign up</AppButton>
        </Stack>
      </Stack>
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
        <Stack direction="row">
          <AppButton sx={{ alignItems: 'center', justifyContent: 'center' }}>
            Plan your trip <ArrowForwardIcon />
          </AppButton>
          <AppButton>Learn more</AppButton>
        </Stack>
        <Stack direction="row">
          <Typography>1200+ users</Typography>
          <AvatarGroup>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          </AvatarGroup>
          <Typography>Track their trips in our App.</Typography>
        </Stack>
      </Stack>
      <Stack>
        <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
          <Box
            sx={{
              height: '250px',
              borderRadius: 4,
              overflow: 'hidden',
              mb: 2,
            }}
          >
            <Box
              component="img"
              src="/images/camper-van.jpg"
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
              height: '250px',
              borderRadius: 4,
              overflow: 'hidden',
            }}
          >
            <Box
              component="img"
              src="/images/beach-palm.jpg"
              alt="Beach with palm tree"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </Box>
          <Box
            sx={{
              height: '100%',
              borderRadius: 4,
              overflow: 'hidden',
            }}
          >
            <Box
              component="img"
              src="/images/city-skyline.jpg"
              alt="City skyline at sunset"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </Box>
        </Grid>
      </Stack>
    </>
  );
}

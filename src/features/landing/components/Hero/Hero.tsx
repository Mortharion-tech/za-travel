import { Box, Stack, Typography } from '@mui/material';

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
      </Stack>
    </>
  );
}

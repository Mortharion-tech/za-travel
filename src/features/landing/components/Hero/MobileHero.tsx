import {
  Avatar,
  AvatarGroup,
  Box,
  Link,
  Stack,
  Typography,
} from '@mui/material';

import { AppRoutes } from '@config/routes';
import AppButton from '@features/ui/AppButton';

export default function Hero() {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        maxWidth: '1720px',
        mx: 'auto',
        overflow: 'hidden',
      }}
    >
      <Stack direction="row" justifyContent="space-between" spacing={4}>
        <Box
          sx={{
            width: '100%',
            px: 4,
            py: 5,
            borderRadius: 2,
          }}
        >
          <Typography
            variant="h1"
            sx={{ mt: 4, fontSize: '60px', fontWeight: 700 }}
          >
            Your Ultimate Trip Companion
          </Typography>

          <Typography
            variant="body1"
            sx={{ mt: 2, color: '#64727C', fontSize: '18px' }}
          >
            Welcome to ZaTravel - Your Passport to Seamless Adventures!
            Discover, plan, and track your journeys effortlessly with our
            intuitive web application. Start exploring now!
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
            <AppButton
              variant="contained"
              color="primary"
              LinkComponent={Link}
              href={AppRoutes.addTrip}
              fullWidth
            >
              Plan your trip
            </AppButton>
          </Box>

          <Box
            sx={{
              mt: 4,
              pt: 2,
              borderTop: '1px solid rgba(0, 0, 0, 0.08)',
              display: 'flex',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Typography fontWeight="medium">1200+ users</Typography>
            <AvatarGroup max={4}>
              <Avatar src="/static/images/avatar/1.jpg" />
              <Avatar src="/static/images/avatar/2.jpg" />
              <Avatar src="/static/images/avatar/4.jpg" />
              <Avatar src="/static/images/avatar/5.jpg" />
            </AvatarGroup>
            <Typography variant="body2" color="text.secondary">
              Track their trips in our App.
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}

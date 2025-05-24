import {
  Avatar,
  AvatarGroup,
  Box,
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
import planeIconImage from '../../assets/plane-icon.png';
import planePathImage from '../../assets/plane-path.png';
import planeImage from '../../assets/plane.png';

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
      <Box
        component="img"
        src={planeImage}
        alt="Plane path"
        sx={{
          position: 'absolute',
          top: '-80px',
          left: '-100px',
          width: '1200px',
          zIndex: -1,
          pointerEvents: 'none',
        }}
      />

      <Stack direction="row" justifyContent="space-between" spacing={4}>
        <Box
          sx={{
            width: '668px',
            px: 4,
            py: 5,
            borderRadius: 2,
          }}
        >
          <PlaneIcon />

          <Typography
            variant="h1"
            sx={{ mt: 4, fontSize: '60px', fontWeight: 700 }}
          >
            Your Ultimate Trip Companion
          </Typography>

          <Typography
            variant="body1"
            sx={{ mt: 2, color: '#4A5568', fontSize: '16px' }}
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
            >
              Plan your trip
            </AppButton>
            <AppButton
              variant="outlined"
              color="primary"
              LinkComponent={Link}
              href={AppRoutes.login}
            >
              Learn more
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

        <Box
          sx={{
            width: '791px',
            height: '926px',
            display: 'flex',
            gap: '24px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
            }}
          >
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
          </Box>

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
        </Box>
      </Stack>
    </Box>
  );
}

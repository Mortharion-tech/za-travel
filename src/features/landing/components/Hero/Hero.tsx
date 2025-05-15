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
        {/* Left content with exact dimensions */}
        <Box
          sx={{
            width: '668px',
            height: '636px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          {/* Frame 1 - Top content */}
          <Box sx={{ pt: 8 }}>
            <Box sx={{ mb: 4 }}>
              <PlaneIcon />
            </Box>

            <Typography
              variant="h1"
              sx={{ mb: 3, fontSize: '42px', fontWeight: 'bold' }}
            >
              Your Ultimate Trip Companion
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 5,
                fontSize: '16px',
                color: '#4a5568',
                maxWidth: '600px',
              }}
            >
              Welcome to ZaTravel - Your Passport to Seamless Adventures!
              Discover, plan, and track your journeys effortlessly with our
              intuitive web application. Start exploring now!
            </Typography>

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
          </Box>

          {/* Frame 2 - Bottom content - pushed to the bottom */}
          <Box sx={{ mb: 5 }}>
            <Stack direction="row" alignItems="center" spacing={2}>
              <Typography
                variant="body2"
                fontWeight="medium"
                sx={{ fontSize: '16px' }}
              >
                1200+ users
              </Typography>
              <AvatarGroup
                max={4}
                sx={{
                  mx: 1,
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    border: '2px solid white',
                  },
                }}
              >
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                <Avatar
                  alt="Trevor Henderson"
                  src="/static/images/avatar/5.jpg"
                />
              </AvatarGroup>
              <Typography
                variant="body2"
                sx={{ fontSize: '16px', color: '#4a5568' }}
              >
                Track their trips in our App.
              </Typography>
            </Stack>
          </Box>
        </Box>

        {/* Right content - images section - already properly structured */}
        <Box
          sx={{ width: '791px', height: '926px', display: 'flex', gap: '24px' }}
        >
          {/* Left column with two images */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
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

          {/* Right image */}
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

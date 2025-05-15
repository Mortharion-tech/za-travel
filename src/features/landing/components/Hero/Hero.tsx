import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
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

export default function Hero() {
  return (
    <Box sx={{ width: '100%', maxWidth: '1720px', mx: 'auto' }}>
      <Stack direction="row" justifyContent="space-between" spacing={4}>
        <Box
          sx={{
            width: '668px',
            height: '636px',
            position: 'relative',
            borderRadius: 2,
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: '80px',
              left: '32px',
              right: '32px',
            }}
          >
            <PlaneIcon />

            <Typography
              variant="h1"
              sx={{
                mt: 4,
                color: '#375D81',
                fontSize: '42px',
                fontWeight: 'bold',
                lineHeight: 1.2,
              }}
            >
              Your Ultimate Trip Companion
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mt: 2,
                color: '#4A5568',
                fontSize: '16px',
                lineHeight: 1.6,
                maxWidth: '560px',
              }}
            >
              Welcome to ZaTravel - Your Passport to Seamless Adventures!
              Discover, plan, and track your journeys effortlessly with our
              intuitive web application. Start exploring now!
            </Typography>
          </Box>

          <Box
            sx={{
              position: 'absolute',
              left: '32px',
              right: '32px',
              top: '340px',
              display: 'flex',
              gap: 2,
            }}
          >
            <AppButton
              variant="contained"
              color="primary"
              LinkComponent={Link}
              href={AppRoutes.addTrip}
              sx={{
                width: '50%',
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
                width: '50%',
                height: '56px',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              Learn more
            </AppButton>
          </Box>

          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '80px',
              display: 'flex',
              alignItems: 'center',
              px: 4,
              borderTop: '1px solid rgba(0, 0, 0, 0.08)',
            }}
          >
            <Typography variant="body1" fontWeight="medium" sx={{ mr: 2 }}>
              1200+ users
            </Typography>
            <AvatarGroup
              max={4}
              sx={{
                mr: 2,
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
            <Typography variant="body2" color="text.secondary">
              Track their trips in our App.
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{ width: '791px', height: '926px', display: 'flex', gap: '24px' }}
        >
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

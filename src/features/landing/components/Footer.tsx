import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import {
  Box,
  Container,
  Link,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';

import Logo from '@features/ui/logo/Logo';

export default function Footer() {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        py: 5,
        bgcolor: 'background.paper',
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <Stack direction="column" alignItems="center" spacing={2}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Logo />
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="subtitle1"
              component="h3"
              sx={{
                fontWeight: 600,
                mb: 0.5,
              }}
            >
              Get in touch
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Contact us anytime for
              <br />
              getting support
            </Typography>
          </Box>

          <Typography
            variant="body1"
            component="a"
            href="mailto:contact@zatravel.com"
            sx={{
              textDecoration: 'none',
              color: 'text.primary',
              mb: 2,
              fontWeight: 500,
            }}
          >
            contact@zatravel.com
          </Typography>

          <Stack direction="row" spacing={2} sx={{ color: '#6a994e' }}>
            <Link
              href="#"
              aria-label="Instagram"
              sx={{
                color: 'inherit',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 36,
                height: 36,
                borderRadius: '50%',
                border: '1px solid',
                borderColor: 'divider',
                transition: 'all 0.2s',
                '&:hover': {
                  bgcolor: 'rgba(106, 153, 78, 0.1)',
                },
              }}
            >
              <InstagramIcon fontSize="small" />
            </Link>
            <Link
              href="#"
              aria-label="Facebook"
              sx={{
                color: 'inherit',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 36,
                height: 36,
                borderRadius: '50%',
                border: '1px solid',
                borderColor: 'divider',
                transition: 'all 0.2s',
                '&:hover': {
                  bgcolor: 'rgba(106, 153, 78, 0.1)',
                },
              }}
            >
              <FacebookIcon fontSize="small" />
            </Link>
            <Link
              href="#"
              aria-label="Twitter"
              sx={{
                color: 'inherit',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 36,
                height: 36,
                borderRadius: '50%',
                border: '1px solid',
                borderColor: 'divider',
                transition: 'all 0.2s',
                '&:hover': {
                  bgcolor: 'rgba(106, 153, 78, 0.1)',
                },
              }}
            >
              <TwitterIcon fontSize="small" />
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

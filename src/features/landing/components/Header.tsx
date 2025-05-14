import { Box, Container, Link, Stack } from '@mui/material';

import { AppRoutes } from '@config/routes';
import AppButton from '@features/ui/AppButton';
import Logo from '@features/ui/logo/Logo';

export default function Header() {
  return (
    <Box sx={{ px: '100px', width: '100%' }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box>
          <Logo />
        </Box>
        <Stack direction="row" gap={2.5}>
          <AppButton
            variant="outlined"
            color="primary"
            LinkComponent={Link}
            href={AppRoutes.login}
          >
            Log in
          </AppButton>
          <AppButton
            variant="contained"
            color="primary"
            LinkComponent={Link}
            href={AppRoutes.signUp}
          >
            Sign up
          </AppButton>
        </Stack>
      </Stack>
    </Box>
  );
}

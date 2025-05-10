import { Box, Stack } from '@mui/material';

import AppButton from '@features/ui/AppButton';
import Logo from '@features/ui/logo/Logo';

export default function Header() {
  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box>
          <Logo />
        </Box>
        <Stack direction="row" gap={2.5}>
          <AppButton variant="outlined" color="primary">
            Log in
          </AppButton>
          <AppButton variant="contained" color="primary">
            Sign up
          </AppButton>
        </Stack>
      </Stack>
    </>
  );
}

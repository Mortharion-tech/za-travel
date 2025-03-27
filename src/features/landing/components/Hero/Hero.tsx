import { Box, Stack } from '@mui/material';

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
    </>
  );
}

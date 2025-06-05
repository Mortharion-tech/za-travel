import { Box, Link, Stack } from '@mui/material';

import { AppRoutes } from '@config/routes';
import AppButton from '@features/ui/AppButton';
import Logo from '@features/ui/logo/Logo';
import { useBreakpoints } from '@hooks/useBreakpoints';

export default function Header() {
  const { md } = useBreakpoints();
  return (
    <Box
      sx={{
        px: { xs: '16px', lg: '100px' },
        py: { xs: '8px', lg: '15px' },
        width: '100%',
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          height: '60px',
        }}
      >
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
          {md && (
            <AppButton
              variant="contained"
              color="primary"
              LinkComponent={Link}
              href={AppRoutes.signUp}
            >
              Sign up
            </AppButton>
          )}
        </Stack>
      </Stack>
    </Box>
  );
}

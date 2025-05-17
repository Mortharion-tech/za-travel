import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Card, Container, Grid, Link, Typography } from '@mui/material';

import { AppRoutes } from '@config/routes';
import AppButton from '@features/ui/AppButton';

import dashboardShowcaseImage from '../assets/dashboard-showcase.png';
import expensesShowcaseImage from '../assets/expenses-showcase.png';

export default function AppFeatures() {
  return (
    <Container maxWidth={false} sx={{ maxWidth: '1720px', py: 6 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="subtitle1" color="primary" gutterBottom>
          FEATURES
        </Typography>
        <Typography variant="h3" component="h1" gutterBottom>
          ZaTravel best solution for travel
        </Typography>
      </Box>

      <Grid container spacing={6} alignItems="center" sx={{ mb: 10 }}>
        <Grid item xs={12} md={6}>
          <Card
            elevation={3}
            sx={{
              borderRadius: 2,
              overflow: 'hidden',
              boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
            }}
          >
            <Box
              component="img"
              src={dashboardShowcaseImage}
              alt="Dashboard interface"
              sx={{ width: '100%', display: 'block' }}
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ maxWidth: '90%', mx: { xs: 'auto', md: 0 } }}>
            <Typography
              variant="subtitle1"
              color="primary"
              gutterBottom
              sx={{ fontWeight: 600 }}
            >
              DASHBOARD
            </Typography>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              Organize All Your Trips in a Single Application
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              paragraph
              sx={{ lineHeight: 1.8, mb: 3 }}
            >
              With our intuitive application, you can effortlessly organize all
              your trips in one convenient location. From itinerary details and
              booking confirmations to travel notes and essential documents,
              everything you need for a smooth and stress-free journey is just a
              tap away. Enjoy a clutter-free travel experience and stay in
              control of your adventures with ease.
            </Typography>
            <AppButton
              variant="contained"
              color="primary"
              LinkComponent={Link}
              href={AppRoutes.addTrip}
              endIcon={<ArrowForwardIcon />}
              sx={{
                width: '50%',
                height: '56px',
                alignItems: 'center',
                justifyContent: 'center',
                mt: 2,
                px: 3,
                py: 1.2,
                borderRadius: 2,
                textTransform: 'none',
                fontSize: '1rem',
                fontWeight: 500,
              }}
            >
              Plan your trip
            </AppButton>
          </Box>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={6}
        alignItems="center"
        direction={{ xs: 'column-reverse', md: 'row' }}
      >
        <Grid item xs={12} md={6}>
          <Box sx={{ maxWidth: '90%', mx: { xs: 'auto', md: 0 } }}>
            <Typography
              variant="subtitle1"
              color="primary"
              gutterBottom
              sx={{ fontWeight: 600 }}
            >
              EXPENSES
            </Typography>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              Expense Tracking for Your Travels
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              paragraph
              sx={{ lineHeight: 1.8, mb: 3 }}
            >
              Keep a Close Watch on Your Travel Costs with our User-Friendly
              Expense Tracking Solution. Set budget goals, receive real-time
              updates, and make informed decisions to ensure you get the most
              out of your travel experiences without any financial surprises.
              Travel with confidence, knowing that your expenses are
              well-managed and under control.
            </Typography>
            <AppButton
              variant="contained"
              color="primary"
              LinkComponent={Link}
              href={AppRoutes.addTrip}
              endIcon={<ArrowForwardIcon />}
              sx={{
                width: '50%',
                height: '56px',
                alignItems: 'center',
                justifyContent: 'center',
                mt: 2,
                px: 3,
                py: 1.2,
                borderRadius: 2,
                textTransform: 'none',
                fontSize: '1rem',
                fontWeight: 500,
              }}
            >
              Plan your trip
            </AppButton>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card
            elevation={3}
            sx={{
              borderRadius: 2,
              overflow: 'hidden',
              boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
            }}
          >
            <Box
              component="img"
              src={expensesShowcaseImage}
              alt="Expenses interface"
              sx={{ width: '100%', display: 'block' }}
            />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

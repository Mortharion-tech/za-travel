import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Button, Card, Container, Grid, Typography } from '@mui/material';

import dashboardShowcaseImage from '../assets/dashboard-showcase.png';
import expensesShowcaseImage from '../assets/expenses-showcase.png';

export default function AppFeatures() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="subtitle1" color="primary" gutterBottom>
          FEATURES
        </Typography>
        <Typography variant="h3" component="h1" gutterBottom>
          ZaTravel best solution for travel
        </Typography>
      </Box>

      <Grid container spacing={4} alignItems="center" sx={{ mb: 8 }}>
        <Grid item xs={12} md={6}>
          <Card elevation={3} sx={{ borderRadius: 2, overflow: 'hidden' }}>
            <Box
              component="img"
              src={dashboardShowcaseImage}
              alt="Dashboard interface"
              sx={{ width: '100%' }}
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1" color="primary" gutterBottom>
            DASHBOARD
          </Typography>
          <Typography variant="h4" component="h2" gutterBottom>
            Organize All Your Trips in a Single Application
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            With our intuitive application, you can effortlessly organize all
            your trips in one convenient location. From itinerary details and
            booking confirmations to travel notes and essential documents,
            everything you need for a smooth and stress-free journey is just a
            tap away. Enjoy a clutter-free travel experience and stay in control
            of your adventures with ease.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            endIcon={<ArrowForwardIcon />}
            sx={{ mt: 2 }}
          >
            Plan your trip
          </Button>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={4}
        alignItems="center"
        direction={{ xs: 'column-reverse', md: 'row' }}
      >
        <Grid item xs={12} md={6}>
          <Typography variant="subtitle1" color="primary" gutterBottom>
            EXPENSES
          </Typography>
          <Typography variant="h4" component="h2" gutterBottom>
            Expense Tracking for Your Travels
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Keep a Close Watch on Your Travel Costs with our User-Friendly
            Expense Tracking Solution. Set budget goals, receive real-time
            updates, and make informed decisions to ensure you get the most out
            of your travel experiences without any financial surprises. Travel
            with confidence, knowing that your expenses are well-managed and
            under control.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            endIcon={<ArrowForwardIcon />}
            sx={{ mt: 2 }}
          >
            Plan your trip
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card elevation={3} sx={{ borderRadius: 2, overflow: 'hidden' }}>
            <Box
              component="img"
              src={expensesShowcaseImage}
              alt="Expenses interface"
              sx={{ width: '100%' }}
            />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

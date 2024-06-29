import {
  Button,
  Container,
  Link,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

export default function ForgotPasswordForm() {
  return (
    <Container component="main" maxWidth="md">
      <Typography variant="h4" align="center" sx={{ marginBottom: 1 }}>
        Forgot your password?
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Don’t worry, it happens to the best of us.
      </Typography>
      <form>
        <TextField
          label="Email address"
          type="email"
          fullWidth
          variant="outlined"
          InputProps={{
            sx: { borderRadius: '16px', marginBottom: 1 },
          }}
          required
          margin="normal"
        />

        <Stack>
          <Typography variant="subtitle2" align="center">
            We have sent a recovery code to your email
          </Typography>
          <Typography variant="caption" align="center">
            Please check your inbox and paste the recovery code below
          </Typography>
          <TextField
            label="Enter recovery code"
            type="password"
            fullWidth
            variant="outlined"
            InputProps={{
              sx: { borderRadius: '16px', marginBottom: 1.5 },
            }}
            required
            margin="normal"
          />
        </Stack>

        <Button
          sx={{ borderRadius: '8px', marginBottom: 1.5 }}
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          fullWidth
        >
          Submit code
        </Button>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={1}
          sx={{ marginBottom: 1.5 }}
        >
          <Typography variant="subtitle2">
            {' '}
            Didn't receive your email?
          </Typography>
          <Button variant="text" color="primary" size="small">
            Resend code in 50s
          </Button>
        </Stack>

        <Stack sx={{ marginBottom: 1.5 }}>
          <Typography variant="body1" align="center" gutterBottom>
            Having trouble?
          </Typography>
          <Typography align="center">
            <Link href="#" variant="body2" align="center">
              Visit our help center
            </Link>
          </Typography>
        </Stack>
        <Typography align="center">
          <Link href="#" variant="body2" align="center">
            Back to log in
          </Link>
        </Typography>
      </form>
    </Container>
  );
}

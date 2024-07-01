import {
  Button,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  Link,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

export default function LoginForm() {
  return (
    <Container component="main" maxWidth="md">
      <Stack sx={{ marginBottom: 4 }}>
        <Typography align="center" variant="h4">
          Log in
        </Typography>
      </Stack>
      <form>
        <TextField
          label="Email address"
          type="email"
          fullWidth
          variant="outlined"
          InputProps={{
            sx: { borderRadius: '16px', marginBottom: 2 },
          }}
          required
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          variant="outlined"
          InputProps={{
            sx: { borderRadius: '16px', marginBottom: 1 },
          }}
          required
        />
        <FormControlLabel
          control={<Checkbox color="primary" />}
          label="Remember me"
        />
        <p> add remember me check box here</p>
        <Button
          sx={{ borderRadius: '8px', marginBottom: 1.5 }}
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          fullWidth
        >
          Log in
        </Button>
        <Divider>Or</Divider>
        <Button
          fullWidth
          variant="outlined"
          startIcon={
            <img
              src="/images/google_icon.png"
              alt="Google"
              style={{ width: 24, height: 24 }}
            />
          }
          sx={{ mt: 2, mb: 2 }}
        >
          Continue with Google
        </Button>
        <Typography align="center" variant="body2">
          Having trouble logging in?
        </Typography>

        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          <Link href="#">Reset password</Link> or{' '}
          <Link href="#">Visit our help center</Link>
        </Typography>

        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
          New to Nvoye?
          <Link href="#">Create an account</Link>
        </Typography>
      </form>
    </Container>
  );
}

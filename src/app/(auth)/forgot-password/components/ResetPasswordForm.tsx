import { Button, Link, Stack, TextField, Typography } from '@mui/material';

export default function ResetPasswordForm() {
  return (
    <Stack>
      <Typography variant="h4" align="center" sx={{ marginBottom: 1 }}>
        Reset Password
      </Typography>
      <form>
        <TextField
          label="Enter new password"
          type="password"
          fullWidth
          variant="outlined"
          InputProps={{
            sx: { borderRadius: '16px' },
          }}
          required
          margin="normal"
        />
        <TextField
          label="Confirm password"
          type="password"
          fullWidth
          variant="outlined"
          InputProps={{
            sx: { borderRadius: '16px', marginBottom: 1 },
          }}
          required
          margin="normal"
        />
        <Button
          sx={{ borderRadius: '8px', marginBottom: 1.5 }}
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          fullWidth
        >
          Update password
        </Button>
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
      </form>
    </Stack>
  );
}

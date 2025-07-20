import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Box, TextField, Button, Container, Typography } from '@mui/material';
import { type ChangeEvent, type FormEvent, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import paths from '@/constants/path';
import { AuthContext } from '@/contexts/Auth';

// Define interface for form data
interface LoginFormData {
  email: string;
  password: string;
}

export const LoginPage = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    auth?.login();
    navigate(paths.HOME);
    // Add form submission logic here
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        py: 4,
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          width: {
            xs: '100%',      // Mobile: full width
            sm: '80%',       // Small: 80% width
            md: '60%',       // Medium: 60% width
            lg: '75%',       // Large: 75% (3/4) width
            xl: '75%',       // Extra large: 75% width
          },
          maxWidth: '600px', // Maximum width limit
          p: 4,
          borderRadius: 2,
          boxShadow: 3,
          bgcolor: 'background.paper',
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{
            textAlign: 'center',
            mb: 2,
            fontWeight: 600,
          }}
        >
          Login
        </Typography>

        <TextField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          required
          variant="outlined"
        />

        <TextField
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          fullWidth
          required
          variant="outlined"
        />

        <Button
          type="submit"
          variant="contained"
          size="large"
          sx={{
            mt: 2,
            py: 1.5,
          }}
        >
          Submit
        </Button>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mt: 2,
            pt: 2,
            borderTop: 1,
            borderColor: 'divider',
          }}
        >
          <Button
            component={Link}
            to={paths.HOME}
            variant="text"
            color="primary"
            sx={{
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            <KeyboardBackspaceIcon /> Back to Home
          </Button>

          <Button
            variant="outlined"
            color="error"
            onClick={() => setFormData({ email: '', password: '' })}
            sx={{
              minWidth: 100,
            }}
          >
            Reset
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

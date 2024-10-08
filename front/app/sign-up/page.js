"use client"
import {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import Switch from '@mui/material/Switch';

import { alpha, styled } from '@mui/material/styles';
import { green } from '@mui/material/colors';

  const GreenSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: green[600],
      '&:hover': {
        backgroundColor: alpha(green[600], theme.palette.action.hoverOpacity),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: green[600],
    },
  }));
  
  export default function SignUp() {
    const [isSeller, setIsSeller] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
    /* const [nameError, setNameError] = useState(false);
    const [nameErrorMessage, setNameErrorMessage] = useState(''); */
  
    const validateInputs = () => {
      const email = document.getElementById('email');
      const password = document.getElementById('password');
      /* const name = document.getElementById('name'); */
  
      let isValid = true;
  
      if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
        setEmailError(true);
        setEmailErrorMessage('Please enter a valid email address.');
        isValid = false;
      } else {
        setEmailError(false);
        setEmailErrorMessage('');
      }
  
      if (!password.value || password.value.length < 6) {
        setPasswordError(true);
        setPasswordErrorMessage('Password must be at least 6 characters long.');
        isValid = false;
      } else {
        setPasswordError(false);
        setPasswordErrorMessage('');
      }
  
      /* if (!name.value || name.value.length < 1) {
        setNameError(true);
        setNameErrorMessage('Name is required.');
        isValid = false;
      } else {
        setNameError(false);
        setNameErrorMessage('');
      } */
  
      return isValid;
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      console.log({
        /* name: data.get('name'),
        lastName: data.get('lastName'), */
        email: data.get('email'),
        password: data.get('password'),
        isSeller: isSeller,
      });
    };

    const handleChange = (event) => {
        setIsSeller(event.target.checked);
    };
  
    return (
            <Stack
                direction="column" justifyContent="space-between"
              sx={{
                justifyContent: 'center',
                height: '100dvh',
                p: 2,
              }}
            >
              <Card variant="outlined" sx={{p: 4, m: 10}}>
                <Typography
                  component="h1"
                  variant="h4"
                  sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
                >
                  Sign up
                </Typography>
                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
                >
                  {/* <FormControl>
                    <FormLabel htmlFor="name">Full name</FormLabel>
                    <TextField
                      autoComplete="name"
                      name="name"
                      required
                      fullWidth
                      id="name"
                      placeholder="Jon Snow"
                      error={nameError}
                      helperText={nameErrorMessage}
                      color={nameError ? 'error' : 'primary'}
                    />
                  </FormControl> */}
                  <FormControl>
                    <FormLabel htmlFor="type">Do you wish to sell your overstock?</FormLabel>
                    <GreenSwitch value={isSeller} onChange={handleChange} id="seller"></GreenSwitch>
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      placeholder="your@email.com"
                      name="email"
                      autoComplete="email"
                      variant="outlined"
                      error={emailError}
                      helperText={emailErrorMessage}
                      color={passwordError ? 'error' : 'primary'}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      placeholder="••••••"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                      variant="outlined"
                      error={passwordError}
                      helperText={passwordErrorMessage}
                      color={passwordError ? 'error' : 'primary'}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="company-name">Company Name</FormLabel>
                    <TextField
                      required
                      fullWidth
                      name="company-name"
                      placeholder="Overstock Hub"
                      type="company-name"
                      id="company-name"
                      variant="outlined"
                      disabled={!isSeller}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="city">City</FormLabel>
                    <TextField
                      required
                      fullWidth
                      name="city"
                      placeholder="Lappeenranta"
                      type="city"
                      id="city"
                      autoComplete="city"
                      variant="outlined"
                      disabled={!isSeller}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="postal-code">Postal Code</FormLabel>
                    <TextField
                      required
                      fullWidth
                      name="postal-code"
                      placeholder="35850"
                      type="postal-code"
                      id="postal-code"
                      autoComplete="postal-code"
                      variant="outlined"
                      disabled={!isSeller}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="street-address">Street Address</FormLabel>
                    <TextField
                      required
                      fullWidth
                      name="street-address"
                      placeholder="Orioninkatu 1"
                      type="street-address"
                      id="street-address"
                      autoComplete="street-address"
                      variant="outlined"
                      disabled={!isSeller}
                    />
                  </FormControl>
                  {/* <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="I want to receive updates via email."
                  /> */}
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    onClick={validateInputs}
                  >
                    Sign up
                  </Button>
                  <Typography sx={{ textAlign: 'center' }}>
                    Already have an account?{' '}
                    <span>
                      <Link
                        href="/sign-in/"
                        variant="body2"
                        sx={{ alignSelf: 'center' }}
                      >
                        Sign in
                      </Link>
                    </span>
                  </Typography>
                </Box>
              </Card>
            </Stack>
    );
  }
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png';

const Login = () => {

    const [loginData, setLoginData] = useState({});
    const { user, isLoading, authError, loginUser, signInwithGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    };

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInwithGoogle(location, history);
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Typography sx={{ marginTop: '70px' }} variant="body1" gutterBottom>
                        Login
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>

                        <TextField
                            sx={{ width: '75%', margin: '70px' }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            onBlur={handleOnChange}
                            variant="standard" /> <br />
                        <TextField
                            sx={{ width: '75%' }}
                            id="standard-basic"
                            label="Your Password"
                            name="password"
                            onBlur={handleOnChange}
                            type="password"
                            variant="standard" /> <br />
                        <Button variant="contained" sx={{ width: '75%', m: 1, marginTop: '50px' }} type="submit"> Login</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/register">
                            <Button variant="text">New User? Please Register.</Button>
                        </NavLink>
                    </form>
                    <Button onClick={handleGoogleSignIn} variant="contained">Google signin</Button>
                    {isLoading && <CircularProgress />}

                    {user?.email && <Alert severity="success">User Login Successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>
                    }
                </Grid>
                <Grid item xs={4}>
                    <img style={{ width: '400px', marginTop: '50px', margin: '40px' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;
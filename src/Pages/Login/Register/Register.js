import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const {user, registration, isLoading, authError} = useAuth();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    };

    const handleLoginSubmit = e => {
    if(loginData.password !== loginData.password2){
        alert('Didnt match your password, please enter same password.')
        return;
    }
    registration(loginData.email, loginData.password,loginData.name, history)
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Typography sx={{ marginTop: '70px' }} variant="body1" gutterBottom>
                        Register
                    </Typography>
                    { !isLoading &&<form onSubmit={handleLoginSubmit}>

                        <TextField
                            sx={{ width: '75%', margin: '10px' }}
                            id="standard-basic"
                            label="Your Name"
                            name="name"
                            onBlur={handleOnBlur}
                            variant="standard" /> <br />
                        <TextField
                            sx={{ width: '75%', margin: '60px' }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            type="email"
                            onBlur={handleOnBlur}
                            variant="standard" /> <br />
                        <TextField
                            sx={{ width: '75%' }}
                            id="standard-basic"
                            label="Your Password"
                            name="password"
                            onBlur={handleOnBlur}
                            type="password"
                            variant="standard" /> <br />
                        <TextField
                            sx={{ width: '75%', marginTop:'65px' }}
                            id="standard-basic"
                            label="Re-enter Your Password"
                            name="password2"
                            onBlur={handleOnBlur}
                            type="password"
                            variant="standard" /> <br />

                        <Button variant="contained" sx={{ width: '75%', m: 1, marginTop: '50px' }} type="submit"> Register</Button>
                        
                        <NavLink
                        style={{textDecoration:'none'}}
                        to="/login">
                            <Button variant="text">Alreadey Register? Please Login.</Button>
                        </NavLink>
                    </form>}
                    {isLoading && <CircularProgress />}

                    {user?.email && <Alert severity="success">User Registration Successfully!</Alert>}
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

export default Register;
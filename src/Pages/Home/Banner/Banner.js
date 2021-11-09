import React from 'react';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png'
import bg from '../../../images/bg.png'
import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';

const bannerBg = {
    background : `url(${bg})`
}
const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400,
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item style={{...verticalCenter,textAlign: 'left'}} xs={12} md={6}>
                    <Box>
                    <Typography variant="h3"> 
                        Your new smile <br />
                        starts here.
                    </Typography>
                    <Typography variant="h6" sx={{fontSize: 14, color:' lightGray', my:3}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ut sint dolores aut laudantium magni officiis a molestias eius excepturi?
                    </Typography>
                    <Button variant="contained">Get Appointment</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img style={{width: 400}} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;
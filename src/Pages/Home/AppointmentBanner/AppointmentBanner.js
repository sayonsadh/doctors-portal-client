import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Button, Typography } from '@mui/material';

const appointmentBanner = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(65, 72, 92, 0.9)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 175
}


const AppointmentBanner = () => {
    return (
        <div>
            <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img
                            style={{ width: 400, marginTop: '-110px' }}
                            src={doctor} alt="" />
                    </Grid>
                    <Grid item xs={12} md={6}
                    sx={{
                        display:'flex',
                        justifyContent: 'flex-start',
                        alignItems:"center",
                        textAlign:'left'
                    } }
                    >
                        <Box>
                            <Typography sx={{ color: 'info.main', mb:5 }} variant="h6">Appointment</Typography>
                            <Typography sx={{ color: 'white' }} variant="h4">Make an Appointment Today</Typography>
                            <Typography sx={{ color: 'white', my:5 }} variant="h6" style={{ fontSize: 14, fontWeight: 300 }}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi distinctio voluptatibus similique, numquam laboriosam error eius cumque dolores debitis nostrum? </Typography>
                            <Button variant="contained">Learn More</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default AppointmentBanner;
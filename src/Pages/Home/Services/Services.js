import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';

const services =[
    {
        name:'Fluoride Treatment',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, repudiandae voluptas quo quos at esse, quaerat quidem est amet corrupti impedit et. Ipsam eos modi laboriosam alias earum neque cumque?',
        image:fluoride
    },
    {
        name:'Cavity Filling',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, repudiandae voluptas quo quos at esse, quaerat quidem est amet corrupti impedit et. Ipsam eos modi laboriosam alias earum neque cumque?',
        image:cavity
    },

    {
        name:'Teath whitening',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, repudiandae voluptas quo quos at esse, quaerat quidem est amet corrupti impedit et. Ipsam eos modi laboriosam alias earum neque cumque?',
        image:whitening
    }
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{color: 'info.main', m:2}} variant="h6">
                    OUR SERVICES
                </Typography>
                <Typography sx={{fontWeight: 500, m:5 }} variant="h4">
                    Service We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {services.map((service, index) => (
                        <Grid item xs={4} sm={4} md={4} key={index}>
                            <Service
                            service={service}
                            ></Service>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;
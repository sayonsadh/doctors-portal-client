import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Service = ({ service }) => {
    const { name, description, image } = service;
    return (
        <Card sx={{ minWidth: 275, boxShadow: 0 }}>
            <CardMedia
                component="img"
                style={{width:'auto', height: '80px', margin:'0 auto'}}
                image={image}
                alt="green iguana"
            />
            <CardContent>
                <Typography sx={{ fontSize: 14 }}  gutterBottom>
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default Service;
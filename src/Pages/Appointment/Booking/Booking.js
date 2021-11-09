import { Grid } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import { Button, Typography } from '@mui/material';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({booking, date, setBookingSuccess}) => {
    const {name, time, space} = booking;
    //modal related info
    const [ModalOpen, setModalOpen] = React.useState(false);
    const handleModalOpen = () => setModalOpen(true);
    const handleModalClose = () => setModalOpen(false);

    return (
        <>
        <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{py:5}}>
                <Typography sx={{color: 'info.main'}} variant="h5" gutterBottom component="div">
                    {name}
                </Typography>
                <Typography variant="h6" gutterBottom component="div">
                    {time}
                </Typography>
                <Typography variant="caption" gutterBottom component="div">
                    {space} SPACES AVAILABLE
                </Typography>
                <Button onClick={handleModalOpen} variant="contained">BOOK Appointment</Button>
            </Paper>
        </Grid>
        <BookingModal
        date ={date}
        handleModalClose ={handleModalClose}
        handleModalOpen = {handleModalOpen}
        ModalOpen = {ModalOpen}
        booking = {booking}
        setBookingSuccess={setBookingSuccess}
        ></BookingModal>
        </>
    );
};

export default Booking;
import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const {token} = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdmin = e => {
        const user = {email};
        fetch('https://gentle-plateau-71458.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization' : `Bearer ${token}`,
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                setSuccess(true);
                setEmail('');
                console.log(data);
            }
        })
        e.preventDefault();
    }
    return (
        <div>
            {success && <Alert severity="success">Make Admin Successfully!</Alert>}
            <h2>Make an Admin.</h2>
            <form onSubmit={handleAdmin}>
            <TextField
             label="email" 
             type="email"
             onBlur={handleOnBlur}
             variant="standard" /> <br /> <br />
             <Button type="submit" variant="contained">Make Admin</Button>
            </form>
        </div>
    );
};

export default MakeAdmin;
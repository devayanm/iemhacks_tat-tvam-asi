import React from 'react';
import { Container, Typography, Avatar } from '@mui/material';

function Profile() {
    return (
        <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '50px' }}>
            <Avatar alt="User Avatar" src="/path/to/avatar.jpg" sx={{ width: 100, height: 100, margin: '0 auto 20px' }} />
            <Typography variant="h6">User's Name</Typography>
            <Typography variant="body1" paragraph>
                About me: A brief description of the user.
            </Typography>
        </Container>
    );
}

export default Profile;

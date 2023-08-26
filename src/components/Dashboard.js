import React from 'react';
import { Container, Typography } from '@mui/material';

function Dashboard() {
    return (
        <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '50px' }}>
            <Typography variant="h4" gutterBottom>
                User Dashboard
            </Typography>
            <Typography variant="body1" paragraph>
                Welcome to your dashboard. Here, you can connect with peers and access resources.
            </Typography>
        </Container>
    );
}

export default Dashboard;

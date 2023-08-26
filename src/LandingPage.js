import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function LandingPage() {
    return (
        <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '50px' }}>
            <Typography variant="h4" gutterBottom>
                Welcome to EmpathConnect
            </Typography>
            <Typography variant="body1" paragraph>
                A supportive online community for student mental health.
            </Typography>
            <Button variant="contained" color="primary" component={Link} to="/dashboard">
                Get Started
            </Button>
        </Container>
    );
}

export default LandingPage;

import React from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

function Forum() {
    return (
        <Container maxWidth="md" style={{ marginTop: '50px' }}>
            <Typography variant="h5" gutterBottom>
                Discussion Forum
            </Typography>
            <List>
                <ListItem button>
                    <ListItemText primary="Topic 1" secondary="User A - 2 hours ago" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Topic 2" secondary="User B - 1 day ago" />
                </ListItem>
                {/* Add more list items */}
            </List>
        </Container>
    );
}

export default Forum;

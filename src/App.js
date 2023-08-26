import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import Link and Routes
import LandingPage from './LandingPage';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Forum from './components/Forum';
import { CssBaseline, AppBar, Toolbar, Typography, Button } from '@mui/material';

function App() {
  return (
    <Router>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component={Link} to="/landingpage" style={{ textDecoration: 'none', color: 'white' }}>
            EmpathConnect
          </Typography>
          <Button color="inherit" component={Link} to="/dashboard">
            Dashboard
          </Button>
          <Button color="inherit" component={Link} to="/profile">
            Profile
          </Button>
          <Button color="inherit" component={Link} to="/forum">
            Forum
          </Button>
        </Toolbar>

      </AppBar>
      <Routes>
        <Route path="/landingpage" component={LandingPage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/profile" component={Profile} />
        <Route path="/forum" component={Forum} />
      </Routes>
    </Router>
  );
}

export default App;

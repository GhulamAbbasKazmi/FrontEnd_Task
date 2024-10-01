// src/components/Home.tsx
import { Typography, Button, Box } from '@mui/material';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import { RegistrationStyles } from './Ui/Styles';

const Home = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('AuthContext must be used within an AuthProvider');
  }

  const { logout, user } = context;
  const navigate = useNavigate(); // Use the useNavigate hook

  const handleLogout = () => {
    logout(); // Call the logout function
    navigate('/'); // Redirect to the login page
  };

  return (
      <Box
        sx={RegistrationStyles.homeBoxStyle}
      >
        <Typography variant="h4" gutterBottom textAlign={"center"}>
          Welcome, {user}!
        </Typography>
        <Button variant="contained" color="secondary" onClick={handleLogout}>
          Logout
        </Button>
      </Box>
  );
};

export default Home;

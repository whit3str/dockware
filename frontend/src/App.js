import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

// Layout components
import Layout from './components/Layout';

// Pages
import Home from './pages/Home';
import SoftwareList from './pages/SoftwareList';
import SoftwareDetail from './pages/SoftwareDetail';
import Login from './pages/Login';
import Register from './pages/Register';
import Admin from './pages/Admin';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/software" element={<SoftwareList />} />
              <Route path="/software/:id" element={<SoftwareDetail />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </Layout>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App; 
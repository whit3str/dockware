import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  Container,
  Grid,
  Typography,
  Box,
  Paper,
  Chip,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Alert
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { getSoftwareById, deleteSoftware } from '../services/api';
import { AuthContext } from '../context/AuthContext';

const SoftwareDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [software, setSoftware] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  useEffect(() => {
    const fetchSoftware = async () => {
      try {
        setLoading(true);
        const data = await getSoftwareById(id);
        setSoftware(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch software details. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSoftware();
  }, [id]);

  const handleDeleteClick = () => {
    setOpenDeleteDialog(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      await deleteSoftware(id);
      setOpenDeleteDialog(false);
      navigate('/software');
    } catch (err) {
      console.error('Error deleting software:', err);
      setError('Failed to delete software. Please try again later.');
      setOpenDeleteDialog(false);
    }
  };

  const handleDeleteCancel = () => {
    setOpenDeleteDialog(false);
  };

  if (loading) {
    return (
      <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container sx={{ py: 4 }}>
        <Alert severity="error">{error}</Alert>
        <Button
          startIcon={<ArrowBackIcon />}
          component={Link}
          to="/software"
          sx={{ mt: 2 }}
        >
          Back to Software List
        </Button>
      </Container>
    );
  }

  if (!software) {
    return (
      <Container sx={{ py: 4 }}>
        <Alert severity="warning">Software not found</Alert>
        <Button
          startIcon={<ArrowBackIcon />}
          component={Link}
          to="/software"
          sx={{ mt: 2 }}
        >
          Back to Software List
        </Button>
      </Container>
    );
  }

  return (
    <Container sx={{ py: 4 }}>
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Button
          startIcon={<ArrowBackIcon />}
          component={Link}
          to="/software"
        >
          Back to Software List
        </Button>

        {user && user.role === 'admin' && (
          <Box>
            <Button
              startIcon={<EditIcon />}
              component={Link}
              to={`/admin/software/edit/${id}`}
              variant="outlined"
              sx={{ mr: 1 }}
            >
              Edit
            </Button>
            <Button
              startIcon={<DeleteIcon />}
              variant="outlined"
              color="error"
              onClick={handleDeleteClick}
            >
              Delete
            </Button>
          </Box>
        )}
      </Box>

      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box
              component="img"
              src={software.logoUrl || '/default-software.png'}
              alt={software.name}
              sx={{
                width: '100%',
                maxHeight: 200,
                objectFit: 'contain',
                mb: 2
              }}
            />
          </Grid>

          <Grid item xs={12} md={8}>
            <Typography variant="h4" component="h1" gutterBottom>
              {software.name}
            </Typography>

            <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              <Chip label={`Version: ${software.version}`} color="primary" />
              {software.category && (
                <Chip label={software.category.name} />
              )}
              <Chip label={software.licenseType} variant="outlined" />
              {software.tags && software.tags.map((tag, index) => (
                <Chip key={index} label={tag} size="small" variant="outlined" />
              ))}
            </Box>

            <Typography variant="body1" paragraph>
              {software.description}
            </Typography>

            <Typography vari

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Paper,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon
} from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import CategoryIcon from '@mui/icons-material/Category';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import { getSoftware, getCategories } from '../services/api';

const Dashboard = () => {
  const [software, setSoftware] = useState([]);
  const [categories, setCategories] = useState([]);
  const [recentSoftware, setRecentSoftware] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const softwareData = await getSoftware();
        const categoriesData = await getCategories();

        setSoftware(softwareData);
        setCategories(categoriesData);

        // Get 5 most recent software
        const sortedSoftware = [...softwareData].sort((a, b) =>
          new Date(b.createdAt) - new Date(a.createdAt)
        );
        setRecentSoftware(sortedSoftware.slice(0, 5));

      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Software Catalog Dashboard
      </Typography>

      <Grid container spacing={4}>
        {/* Stats Cards */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
            <Box display="flex" alignItems="center" mb={2}>
              <AppsIcon color="primary" sx={{ fontSize: 40, mr: 2 }} />
              <Typography variant="h5" component="h2">
                Total Software
              </Typography>
            </Box>
            <Typography variant="h3" component="p" align="center" sx={{ my: 2 }}>
              {software.length}
            </Typography>
            <Button
              component={Link

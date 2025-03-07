import React, { useState } from 'react';
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  IconButton,
  Tooltip,
} from '@mui/material';
import {
  Search,
  Download,
  Info,
  Category,
} from '@mui/icons-material';

const SoftwareList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');

  // Données de démonstration
  const categories = [
    'all',
    'CAD',
    'CAE',
    'CAM',
    'PLM',
    'Visualization',
  ];

  const softwareList = [
    {
      id: 1,
      name: 'Autocad 2024',
      version: '1.0.0',
      category: 'CAD',
      description: 'Logiciel de conception assistée par ordinateur',
      image: '/images/autocad.png',
      tags: ['2D', '3D', 'Drafting'],
      size: '2.5 GB',
      status: 'active',
    },
    {
      id: 2,
      name: 'Solidworks 2023',
      version: '2.1.0',
      category: 'CAD',
      description: 'Logiciel de conception mécanique 3D',
      image: '/images/solidworks.png',
      tags: ['3D', 'Mechanical', 'Simulation'],
      size: '3.8 GB',
      status: 'active',
    },
    {
      id: 3,
      name: 'Ansys 2023 R2',
      version: '3.0.0',
      category: 'CAE',
      description: 'Logiciel de simulation numérique',
      image: '/images/ansys.png',
      tags: ['FEA', 'CFD', 'Simulation'],
      size: '15 GB',
      status: 'active',
    },
  ];

  const filteredSoftware = softwareList.filter(software => {
    const matchesSearch = software.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         software.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === 'all' || software.category === category;
    return matchesSearch && matchesCategory;
  });

  const SoftwareCard = ({ software }) => (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="140"
        image={software.image}
        alt={software.name}
        sx={{ objectFit: 'contain', p: 2, bgcolor: 'grey.100' }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="div">
          {software.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Version {software.version}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {software.description}
        </Typography>
        <Box sx={{ mb: 2 }}>
          {software.tags.map((tag, index) => (
            <Chip
              key={index}
              label={tag}
              size="small"
              sx={{ mr: 1, mb: 1 }}
            />
          ))}
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            {software.size}
          </Typography>
          <Box>
            <Tooltip title="Télécharger">
              <IconButton size="small">
                <Download />
              </IconButton>
            </Tooltip>
            <Tooltip title="Plus d'informations">
              <IconButton size="small">
                <Info />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Catalogue de logiciels
      </Typography>

      <Box sx={{ mb: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Rechercher un logiciel..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel>Catégorie</InputLabel>
              <Select
                value={category}
                label="Catégorie"
                onChange={(e) => setCategory(e.target.value)}
                startAdornment={
                  <InputAdornment position="start">
                    <Category />
                  </InputAdornment>
                }
              >
                {categories.map((cat) => (
                  <MenuItem key={cat} value={cat}>
                    {cat === 'all' ? 'Toutes les catégories' : cat}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Box>

      <Grid container spacing={3}>
        {filteredSoftware.map((software) => (
          <Grid item key={software.id} xs={12} sm={6} md={4}>
            <SoftwareCard software={software} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SoftwareList; 
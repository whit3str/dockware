import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Grid,
  Paper,
  Typography,
  Button,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import {
  Computer,
  Storage,
  CalendarToday,
  Category,
  Description,
  Download,
  Security,
  Speed,
  Build,
} from '@mui/icons-material';

const SoftwareDetail = () => {
  const { id } = useParams();

  // Données de démonstration
  const software = {
    id: 1,
    name: 'Autocad 2024',
    version: '1.0.0',
    category: 'CAD',
    description: 'Logiciel de conception assistée par ordinateur professionnel pour la conception 2D et 3D.',
    image: '/images/autocad.png',
    tags: ['2D', '3D', 'Drafting', 'Architecture', 'Engineering'],
    size: '2.5 GB',
    status: 'active',
    releaseDate: '2024-03-01',
    licenseKey: 'XXXX-XXXX-XXXX-XXXX',
    requirements: {
      os: 'Windows 10/11 64-bit',
      processor: 'Intel Core i7 ou équivalent',
      ram: '16 GB minimum',
      graphics: 'DirectX 12 compatible',
      storage: '10 GB d\'espace libre',
    },
    features: [
      'Conception 2D et 3D',
      'Rendu photoréaliste',
      'Simulation de mouvement',
      'Collaboration en temps réel',
      'Intégration cloud',
    ],
    changelog: [
      {
        version: '1.0.0',
        date: '2024-03-01',
        changes: [
          'Nouvelle interface utilisateur',
          'Amélioration des performances',
          'Nouveaux outils de modélisation',
        ],
      },
    ],
  };

  const SystemRequirements = () => (
    <TableContainer component={Paper}>
      <Table>
        <TableBody>
          {Object.entries(software.requirements).map(([key, value]) => (
            <TableRow key={key}>
              <TableCell component="th" scope="row">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </TableCell>
              <TableCell>{value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  const Changelog = () => (
    <List>
      {software.changelog.map((release, index) => (
        <React.Fragment key={index}>
          <ListItem>
            <ListItemIcon>
              <CalendarToday />
            </ListItemIcon>
            <ListItemText
              primary={`Version ${release.version} - ${release.date}`}
              secondary={
                <List>
                  {release.changes.map((change, changeIndex) => (
                    <ListItem key={changeIndex}>
                      <ListItemText primary={change} />
                    </ListItem>
                  ))}
                </List>
              }
            />
          </ListItem>
          {index < software.changelog.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </List>
  );

  return (
    <Box>
      <Grid container spacing={3}>
        {/* En-tête */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3, display: 'flex', alignItems: 'center' }}>
            <Box
              component="img"
              src={software.image}
              alt={software.name}
              sx={{ width: 120, height: 120, objectFit: 'contain', mr: 3 }}
            />
            <Box>
              <Typography variant="h4" gutterBottom>
                {software.name}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                Version {software.version}
              </Typography>
              <Box sx={{ mt: 1 }}>
                {software.tags.map((tag, index) => (
                  <Chip
                    key={index}
                    label={tag}
                    size="small"
                    sx={{ mr: 1, mb: 1 }}
                  />
                ))}
              </Box>
            </Box>
          </Paper>
        </Grid>

        {/* Informations principales */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Description
            </Typography>
            <Typography paragraph>{software.description}</Typography>

            <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
              Fonctionnalités principales
            </Typography>
            <List>
              {software.features.map((feature, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <Build />
                  </ListItemIcon>
                  <ListItemText primary={feature} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Informations techniques */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Informations techniques
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <Storage />
                </ListItemIcon>
                <ListItemText primary="Taille" secondary={software.size} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CalendarToday />
                </ListItemIcon>
                <ListItemText
                  primary="Date de sortie"
                  secondary={software.releaseDate}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Category />
                </ListItemIcon>
                <ListItemText
                  primary="Catégorie"
                  secondary={software.category}
                />
              </ListItem>
            </List>

            <Button
              variant="contained"
              color="primary"
              fullWidth
              startIcon={<Download />}
              sx={{ mt: 2 }}
            >
              Télécharger
            </Button>
          </Paper>
        </Grid>

        {/* Configuration système */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Configuration système requise
            </Typography>
            <SystemRequirements />
          </Paper>
        </Grid>

        {/* Changelog */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Historique des versions
            </Typography>
            <Changelog />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SoftwareDetail; 
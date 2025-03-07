import React from 'react';
import {
  Grid,
  Paper,
  Typography,
  Box,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import {
  Computer,
  Update,
  Warning,
  Storage,
} from '@mui/icons-material';

const Home = () => {
  // Données de démonstration
  const stats = {
    totalSoftware: 25,
    updatesAvailable: 3,
    criticalUpdates: 1,
    storageUsed: '750GB',
  };

  const recentUpdates = [
    { name: 'Autocad 2024', version: '1.0.0', date: '2024-03-07' },
    { name: 'Solidworks 2023', version: '2.1.0', date: '2024-03-06' },
    { name: 'Ansys 2023 R2', version: '3.0.0', date: '2024-03-05' },
  ];

  const criticalSoftware = [
    { name: 'Autocad 2023', issue: 'Licence expirée' },
    { name: 'Solidworks 2022', issue: 'Version obsolète' },
  ];

  const StatCard = ({ title, value, icon, color }) => (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          {icon}
          <Typography variant="h6" component="div" sx={{ ml: 1 }}>
            {title}
          </Typography>
        </Box>
        <Typography variant="h4" component="div" color={color}>
          {value}
        </Typography>
      </CardContent>
    </Card>
  );

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Tableau de bord
      </Typography>
      
      <Grid container spacing={3}>
        {/* Statistiques */}
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Logiciels"
            value={stats.totalSoftware}
            icon={<Computer color="primary" />}
            color="primary"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Mises à jour"
            value={stats.updatesAvailable}
            icon={<Update color="info" />}
            color="info.main"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Critiques"
            value={stats.criticalUpdates}
            icon={<Warning color="error" />}
            color="error"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Stockage"
            value={stats.storageUsed}
            icon={<Storage color="success" />}
            color="success.main"
          />
        </Grid>

        {/* Mises à jour récentes */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Mises à jour récentes
            </Typography>
            <List>
              {recentUpdates.map((update, index) => (
                <React.Fragment key={index}>
                  <ListItem>
                    <ListItemText
                      primary={update.name}
                      secondary={`Version ${update.version} - ${update.date}`}
                    />
                  </ListItem>
                  {index < recentUpdates.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Alertes critiques */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom color="error">
              Alertes critiques
            </Typography>
            <List>
              {criticalSoftware.map((software, index) => (
                <React.Fragment key={index}>
                  <ListItem>
                    <ListItemText
                      primary={software.name}
                      secondary={software.issue}
                    />
                  </ListItem>
                  {index < criticalSoftware.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home; 
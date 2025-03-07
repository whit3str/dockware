import React, { useState } from 'react';
import {
  Box,
  Tabs,
  Tab,
  Typography,
  Paper,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import {
  Edit,
  Delete,
  Add,
  Person,
  Computer,
  VpnKey,
  Storage,
  Warning,
} from '@mui/icons-material';

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`admin-tabpanel-${index}`}
      aria-labelledby={`admin-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

const Admin = () => {
  const [tabValue, setTabValue] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogType, setDialogType] = useState('');

  // Données de démonstration
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'user' },
  ];

  const software = [
    {
      id: 1,
      name: 'Autocad 2024',
      version: '1.0.0',
      category: 'CAD',
      status: 'active',
    },
    {
      id: 2,
      name: 'Solidworks 2023',
      version: '2.1.0',
      category: 'CAD',
      status: 'active',
    },
  ];

  const licenses = [
    {
      id: 1,
      software: 'Autocad 2024',
      key: 'XXXX-XXXX-XXXX-XXXX',
      status: 'active',
      assignedTo: 'John Doe',
    },
    {
      id: 2,
      software: 'Solidworks 2023',
      key: 'YYYY-YYYY-YYYY-YYYY',
      status: 'inactive',
      assignedTo: 'Jane Smith',
    },
  ];

  const stats = {
    totalUsers: 25,
    totalSoftware: 15,
    activeLicenses: 20,
    storageUsed: '750GB',
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleOpenDialog = (type) => {
    setDialogType(type);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const UserManagement = () => (
    <Box>
      <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6">Gestion des utilisateurs</Typography>
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={() => handleOpenDialog('user')}
        >
          Ajouter un utilisateur
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nom</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Rôle</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <IconButton>
                    <Edit />
                  </IconButton>
                  <IconButton>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );

  const SoftwareManagement = () => (
    <Box>
      <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6">Gestion des logiciels</Typography>
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={() => handleOpenDialog('software')}
        >
          Ajouter un logiciel
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nom</TableCell>
              <TableCell>Version</TableCell>
              <TableCell>Catégorie</TableCell>
              <TableCell>Statut</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {software.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.version}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell>
                  <IconButton>
                    <Edit />
                  </IconButton>
                  <IconButton>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );

  const LicenseManagement = () => (
    <Box>
      <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6">Gestion des licences</Typography>
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={() => handleOpenDialog('license')}
        >
          Ajouter une licence
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Logiciel</TableCell>
              <TableCell>Clé</TableCell>
              <TableCell>Statut</TableCell>
              <TableCell>Assigné à</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {licenses.map((license) => (
              <TableRow key={license.id}>
                <TableCell>{license.software}</TableCell>
                <TableCell>{license.key}</TableCell>
                <TableCell>{license.status}</TableCell>
                <TableCell>{license.assignedTo}</TableCell>
                <TableCell>
                  <IconButton>
                    <Edit />
                  </IconButton>
                  <IconButton>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );

  const Dashboard = () => (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={3}>
        <Card>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Person color="primary" />
              <Typography variant="h6" sx={{ ml: 1 }}>
                Utilisateurs
              </Typography>
            </Box>
            <Typography variant="h4">{stats.totalUsers}</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Computer color="primary" />
              <Typography variant="h6" sx={{ ml: 1 }}>
                Logiciels
              </Typography>
            </Box>
            <Typography variant="h4">{stats.totalSoftware}</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <VpnKey color="primary" />
              <Typography variant="h6" sx={{ ml: 1 }}>
                Licences
              </Typography>
            </Box>
            <Typography variant="h4">{stats.activeLicenses}</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Storage color="primary" />
              <Typography variant="h6" sx={{ ml: 1 }}>
                Stockage
              </Typography>
            </Box>
            <Typography variant="h4">{stats.storageUsed}</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Administration
      </Typography>

      <Paper sx={{ width: '100%' }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab icon={<Dashboard />} label="Tableau de bord" />
          <Tab icon={<Person />} label="Utilisateurs" />
          <Tab icon={<Computer />} label="Logiciels" />
          <Tab icon={<VpnKey />} label="Licences" />
        </Tabs>

        <TabPanel value={tabValue} index={0}>
          <Dashboard />
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <UserManagement />
        </TabPanel>
        <TabPanel value={tabValue} index={2}>
          <SoftwareManagement />
        </TabPanel>
        <TabPanel value={tabValue} index={3}>
          <LicenseManagement />
        </TabPanel>
      </Paper>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>
          {dialogType === 'user'
            ? 'Ajouter un utilisateur'
            : dialogType === 'software'
            ? 'Ajouter un logiciel'
            : 'Ajouter une licence'}
        </DialogTitle>
        <DialogContent>
          {dialogType === 'user' && (
            <Box sx={{ pt: 2 }}>
              <TextField
                fullWidth
                label="Nom"
                margin="normal"
              />
              <TextField
                fullWidth
                label="Email"
                margin="normal"
                type="email"
              />
              <FormControl fullWidth margin="normal">
                <InputLabel>Rôle</InputLabel>
                <Select>
                  <MenuItem value="admin">Administrateur</MenuItem>
                  <MenuItem value="user">Utilisateur</MenuItem>
                </Select>
              </FormControl>
            </Box>
          )}
          {dialogType === 'software' && (
            <Box sx={{ pt: 2 }}>
              <TextField
                fullWidth
                label="Nom"
                margin="normal"
              />
              <TextField
                fullWidth
                label="Version"
                margin="normal"
              />
              <FormControl fullWidth margin="normal">
                <InputLabel>Catégorie</InputLabel>
                <Select>
                  <MenuItem value="CAD">CAD</MenuItem>
                  <MenuItem value="CAE">CAE</MenuItem>
                  <MenuItem value="CAM">CAM</MenuItem>
                </Select>
              </FormControl>
            </Box>
          )}
          {dialogType === 'license' && (
            <Box sx={{ pt: 2 }}>
              <FormControl fullWidth margin="normal">
                <InputLabel>Logiciel</InputLabel>
                <Select>
                  {software.map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                fullWidth
                label="Clé de licence"
                margin="normal"
              />
              <FormControl fullWidth margin="normal">
                <InputLabel>Assigné à</InputLabel>
                <Select>
                  {users.map((user) => (
                    <MenuItem key={user.id} value={user.id}>
                      {user.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Annuler</Button>
          <Button variant="contained" onClick={handleCloseDialog}>
            Ajouter
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Admin; 
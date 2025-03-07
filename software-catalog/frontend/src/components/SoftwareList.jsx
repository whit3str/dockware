import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  TextField,
  InputAdornment,
  Box,
  Chip,
  CircularProgress
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { getSoftware, searchSoftware } from '../services/api';

const SoftwareList = () => {
  const [software, setSoftware] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchSoftware();
  }, []);

  const fetchSoftware = async () => {
    try {
      setLoading(true);
      const data = await getSoftware();
      setSoftware(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch software. Please try again later.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.length > 2) {
      try {
        setLoading(true);
        const results = await searchSoftware(query);
        setSoftware(results);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    } else if (query.length === 0) {
      fetchSoftware();
    }
  };

  if (loading && software.length === 0) {
    return (
      <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Typography color="error" variant="h6" sx={{ mt: 4, textAlign: 'center' }}>
          {error}
        </Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Software Catalog
      </Typography>

      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search software..."
        value={searchQuery}
        onChange={handleSearch}
        sx={{ mb: 4 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />

      <Grid container spacing={4}>
        {software.length > 0 ? (
          software.map((item) => (
            <Grid item key={item._id} xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardActionArea component={Link} to={`/software/${item._id}`}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.logoUrl || '/default-software.png'}
                    alt={item.name}
                    sx={{ objectFit: 'contain', p: 2, bgcolor: 'background.paper' }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h6" component="h2" noWrap>
                      {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      Version: {item.version}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph sx={{
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                    }}>
                      {item.description}
                    </Typography>
                    <Box sx={{ mt: 1 }}>
                      {item.category && (
                        <Chip
                          label={item.category.name}
                          size="small"
                          sx={{ mr: 1, mb: 1 }}
                        />
                      )}
                      <Chip
                        label={item.licenseType}
                        size="small"
                        color="primary"
                        variant="outlined"
                        sx={{ mr: 1, mb: 1 }}
                      />
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))
        ) : (
          <Container>
            <Typography variant="h6" sx={{ mt: 4, textAlign: 'center' }}>
              No software found.
            </Typography>
          </Container>
        )}
      </Grid>
    </Container>
  );
};

export default SoftwareList;

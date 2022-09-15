import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Grid, Button, Container, Toolbar } from '@mui/material';
import useStyles from '../styles';
function Navbar() {
  const classes = useStyles();
  return (
    <>
      <AppBar
        color='warning'
        sx={{
          paddingBlock: '10px',
          // marginBottom: '20vh',
        }}>
        <Container maxWidth='sm'>
          <Toolbar>
            <Grid container spacing={2} justifyContent='space-between'>
              <Grid item xs={12} sm={4} align='center'>
                <Link to='/' style={{ all: 'unset' }}>
                  <Button
                    className={classes.navButton}
                    fullWidth
                    variant='contained'
                    color='info'>
                    home
                  </Button>
                </Link>
              </Grid>
              <Grid item xs={12} sm={4} align='center'>
                <Link to='about' style={{ all: 'unset' }}>
                  <Button
                    className={classes.navButton}
                    fullWidth
                    variant='contained'
                    color='info'>
                    About
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default Navbar;

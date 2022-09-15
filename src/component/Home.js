import React from 'react';
import Slides from './Slides';
import ProductsList from './ProductsList';
import { Container } from '@mui/material';
import useStyles from '../styles';

function Home() {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth='lg' className={classes.home}>
        <Slides />
        <ProductsList />
      </Container>
    </>
  );
}

export default Home;

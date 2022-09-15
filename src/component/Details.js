/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Grid, Typography, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../data';
import useStyles from '../styles';
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import { useNavigate } from 'react-router-dom';

const Details = () => {
  let { id } = useParams();
  const [product, setProduct] = useState({});
  const navigate = useNavigate();
  const classes = useStyles();
  useEffect(() => {
    getProduct(id).then((data) => {
      setProduct(data);
    });
  }, []);

  return (
    <Container sx={{ marginTop: '20vh' }} maxWidth='md'>
      <Button
        variant='contained'
        color='info'
        sx={{ marginBottom: '1em' }}
        onClick={() => {
          navigate(-1);
        }}>
        <KeyboardBackspaceRoundedIcon
          color='success'
          sx={{ fontSize: '3em', cursor: 'pointer' }}
        />
      </Button>
      <Grid container spacing={2} className={classes.details}>
        <Grid item xs={12} sm={6} className={classes.detailsImageBox}>
          <img
            className={classes.detailsImage}
            src={product.image}
            alt={product.category}
          />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.detailsInfo}>
          <Typography variant='caption' color='error'>
            {product.category}
          </Typography>
          <Typography variant='h4' color='primary'>
            {product.title}
          </Typography>
          <Typography variant='h6' color='success'>
            {product.description}
          </Typography>
          <Typography variant='h2' color='secondary'>
            {product.price} $
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Details;

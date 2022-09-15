import React from 'react';
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Prodcut = ({ product }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/details/${product.id}`);
  };
  return (
    <>
      <Card sx={{ height: '100%' }}>
        <CardActionArea>
          <CardMedia
            sx={{ objectFit: 'contain', width: '100%', height: '20em' }}
            component='img'
            image={product.image}
            alt={product.category}
            onClick={handleNavigate}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant='caption'
              color='error'
              component='div'>
              {product.category}
            </Typography>
            <Typography variant='body2' color='secondary'>
              {product.title}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            fullWidth
            size='small'
            color='secondary'
            variant='contained'
            onClick={handleNavigate}>
            details
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Prodcut;

import React, { useState, useEffect } from 'react';
import { getAllProducts } from '../data';
import { Grid, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import Prodcut from './Prodcut';
import { getAllCategories } from '../data';
import useStyles from '../styles';

function ProductsList() {
  const [products, setproducts] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    getAllProducts().then((data) => {
      setproducts(data);
    });
  }, []);
  const [category, setCategory] = useState('');
  const handleCategory = (e) => {
    setCategory(e.target.value);
  };
  const [allCategories, setAllCategories] = useState([]);
  useEffect(() => {
    getAllCategories().then((data) => {
      setAllCategories(data);
    });
  }, []);
  return (
    <>
      <Grid item xs={12} sm={4} align='center' sx={{ marginBottom: '20px' }}>
        <FormControl
          className={classes.categorySelect}
          fullWidth
          size='small'
          variant='outlined'
          color='success'>
          <InputLabel id='categories-label'>category</InputLabel>
          <Select
            labelId='categories-label'
            id='categories'
            value={category}
            label='category'
            onChange={handleCategory}
            color='success'>
            {allCategories.map((category) => {
              return (
                <MenuItem
                  autoFocus
                  color='success'
                  key={category}
                  value={category}>
                  {category}
                </MenuItem>
              );
            })}
            <MenuItem autoFocus color='success' key='all' value='all'>
              All
            </MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid
        container
        spacing={5}
        justifyContent='stretch
      '>
        {products.map((product) => {
          return (
            <Grid item key={product.id} sm={6} md={4}>
              <Prodcut product={product} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

export default ProductsList;

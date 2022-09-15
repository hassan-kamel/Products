import React from 'react';
import { Box, Typography } from '@mui/material';
import useStyles from '../styles';

function Slide({ image, category, categoryNumber }) {
  const classes = useStyles();

  const handleHover = (e) => {
    // categoryEL.current.style.zIndex = '10';
    // categoryEL.current.style.opacity = '1';
    // categoryTypo.current.style.opacity = '1';
    // categoryImg.current.style.filter = 'grayscale(0)';
  };
  const handleLeave = (e) => {
    // categoryEL.current.style.zIndex = '0';
    // categoryEL.current.style.opacity = '0.8';
    // categoryTypo.current.style.opacity = '0';
    // categoryImg.current.style.filter = 'grayscale(80%)';
  };

  return (
    <>
      <Box
        className={classes.category}
        onMouseOver={handleHover}
        onMouseLeave={handleLeave}
        id={categoryNumber}>
        <img className={classes.categoryImage} src={image} alt={category} />

        <Typography
          className={classes.categoryTypo}
          size='medium'
          variant='contained'
          color='info'>
          {category}
        </Typography>
      </Box>
    </>
  );
}

export default Slide;

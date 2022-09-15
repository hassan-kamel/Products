/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import { getAllCategories } from '../data';
import useStyles from '../styles';
import Slide from './slide';
const images = [
  'https://images.pexels.com/photos/270640/pexels-photo-270640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/3641056/pexels-photo-3641056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/8400220/pexels-photo-8400220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
];

function Slides() {
  const classes = useStyles();
  const [allCategories, setAllCategories] = useState([]);
  const [slideShow, setslideShow] = useState(0);
  setTimeout(() => {
    setslideShow((slideShow + 1) % 4);
  }, 3000);

  allCategories.forEach((cate, idx) => {
    document.getElementById(String(idx)) &&
      (document.getElementById(String(idx)).style.opacity = '0');
    // idx === slideShow &&
    //   document.getElementById(String(slideShow)) &&
    //   (document.getElementById(String(slideShow)).style.display = 'block');
  });

  document.getElementById(String(slideShow)) &&
    (document.getElementById(String(slideShow)).style.opacity = '1');

  // useEffect(() => {
  //   handleSlider();
  // }, [slideShow]);
  useEffect(() => {
    getAllCategories().then((data) => {
      setAllCategories(data);
    });
  }, []);

  return (
    <>
      <div className={classes.slider}>
        {allCategories.map((category, idx) => {
          return (
            <Slide
              key={category}
              image={images[idx]}
              category={category}
              categoryNumber={idx}
            />
          );
        })}
      </div>
    </>
  );
}

export default Slides;

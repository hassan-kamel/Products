import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => {
  console.log('theme: ', theme);

  return {
    app: { backgroundColor: theme.palette.primary?.main },
    category: {
      position: 'absolute',
      transition: 'all 0.2s ease',
      cursor: 'pointer',
      opacity: '0',
      width: '100%',
      height: '100%',
      borderRadius: '1%',
      overflow: 'hidden',
      boxShadow: theme.shadows[10],
    },
    categoryImage: {
      width: '100%',
      height: '100%',
      // aspectRatio: '1/1',
      objectFit: 'cover',
      // filter: 'grayscale(80%)',
    },
    categoryTypo: {
      position: 'absolute',
      left: '5%',
      top: '5%',
      color: theme.palette.success?.main,
      backgroundColor: theme.palette.primary?.main,
      padding: '10px 20px',
      textTransform: 'capitalize',
      borderRadius: '5px',
      boxShadow: theme.shadows[10],
    },

    slider: {
      position: 'relative',
      height: '70vh',
      marginBlock: '20vh 5vh',
    },

    home: {
      // position: 'relative',
      // height: 'auto',z
    },
    navButton: {
      // color: theme.palette.secondary?.main,
      // fontWeight: 'light',
      // fontSize: 'large',
    },
    categorySelect: {
      borderRadius: '5px',
      boxShadow: theme.shadows[10],
      backgroundColor: theme.palette.info?.main,
      color: theme.palette.success?.main,
    },
    details: {},
    detailsImageBox: {
      // marginRight: '50px',
    },
    detailsImage: { width: '100%', height: '500px', objectFit: 'contain' },
    detailsInfo: {},
  };
});

export default useStyles;

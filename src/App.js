import Navbar from './component/Navbar';
import { Routes, Route } from 'react-router-dom';
import About from './component/About';
import Home from './component/Home';
import { createTheme, ThemeProvider } from '@mui/material';
import Details from './component/Details';
// import useStyles from './styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#731702',
    },
    secondary: {
      main: '#F27405;',
    },
    info: {
      main: '#03A678',
    },
    error: {
      main: '#02735E',
    },
    warning: {
      main: '#014040',
    },
    success: {
      main: '#fff',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'Ubuntu',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

function App() {
  // const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className='app'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='details/:id' element={<Details />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;

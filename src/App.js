import React from 'react'
import Banner from './components/Banner'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import { Container, Typography, Button, ThemeProvider, useTheme ,} from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import About from './components/About'


const useStyles = makeStyles((theme) => createStyles({
  flooting: {
    position : "fixed",
  },
}));

function App() {
  const classes = useStyles();
  return (

    <>

      <Banner />
      <About/>
      
    </>

  );
}

export default App


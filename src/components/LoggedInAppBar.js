import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../assets/img/fire.png';
import { Link } from 'react-router-dom';
import Router from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  typography: {
    fontFamily: [
      'Chilanka',
      'cursive',
    ].join(','),
  },
  root: {
    color:'red',
    flexGrow: 1,
    fontFamily: [
      'Chilanka',
      'cursive',
    ].join(','),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color:'#791010',
    fontSize: 14,
    fontFamily: [
      'Dancing Script',
      'Regular 400',
    ].join(','),
  },
  logo:{
    maxWidth:'10%',
    marginLeft:'-15px',
    paddingRight:'5px',
  }
}));


function LoggedInAppBar() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
    <div className={classes.root}>
      <AppBar position="absolute">
        <Toolbar>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton> */}
          <img src={logo} alt="Bonfire" className={classes.logo} />
          <Typography variant="h6" className={classes.root} >
            BONFIRE
          </Typography>
   <Link style={{textDecoration: 'none'}} to="/" ><Button style={{color: '#791010'}}>HOME</Button></Link>
   <Link style={{textDecoration: 'none'}} to="/profile"><Button style={{color: '#791010'}}>PROFILE</Button></Link>
   <Link style={{textDecoration: 'none'}} to="/maps"><Button style={{color: '#791010'}}>MAP</Button></Link>
   <Link style={{textDecoration: 'none'}} to="/about"><Button style={{color: '#791010'}}>ABOUT</Button></Link>
   <Link style={{textDecoration: 'none'}} to="/contact-us" ><Button style={{color: '#791010'}}>CONTACT US</Button></Link>
          {/* <Button color="inherit">ABOUT</Button> */}
          {/* <Button color="inherit">CONTACT US</Button> */}
        </Toolbar>
      </AppBar>
    </div>
    </ThemeProvider>
  );
}

export default LoggedInAppBar;
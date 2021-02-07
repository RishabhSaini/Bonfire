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

  root: {
      color:'red',
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logo:{
    maxWidth:'10%',
  }
}));


function AppAppBar() {
  const classes = useStyles();

  return (
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
          <Typography variant="h6" className={classes.title}>
            Bonfire
          </Typography>
   <Link style={{textDecoration: 'none'}} to="/" ><Button color="black">HOME</Button></Link>
   <Link style={{textDecoration: 'none'}} to="/about"><Button color="black">ABOUT</Button></Link>
   <Link style={{textDecoration: 'none'}} to="/contact-us" ><Button color="black">CONTACT US</Button></Link>
          {/* <Button color="inherit">ABOUT</Button> */}
          {/* <Button color="inherit">CONTACT US</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default AppAppBar;
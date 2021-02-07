import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
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


function MapsAppBar() {
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
            BONFIRE
          </Typography>
   <Link style={{textDecoration: 'none'}} to="/" ><Button style={{color: '#791010'}}>HOME</Button></Link>
   <Link style={{textDecoration: 'none'}} to="/profile"><Button style={{color: '#791010'}}>PROFILE</Button></Link>
   <Link style={{textDecoration: 'none'}} to="/about"><Button style={{color: '#791010'}}>ABOUT</Button></Link>
   <Link style={{textDecoration: 'none'}} to="/contact-us" ><Button style={{color: '#791010'}}>CONTACT US</Button></Link>
          {/* <Button color="inherit">ABOUT</Button> */}
          {/* <Button color="inherit">CONTACT US</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default MapsAppBar;
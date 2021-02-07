import React from 'react';
import { makeStyles, jssPreset, } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import ProfileImage from "../assets/img/Match.png";
import Button from "../ui-components/CustomButtons/Button.js";
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '143ch',
      right: "-137px",
      top: "-10px",
    },
  },

  formControl: {
    margin: theme.spacing(5),
    minWidth: 185,
    maxWidth: 185,
    right: "-100px",
    top: "-40px",
  },
  bio: {
    paddingTop: '115px',
    textIndent: '720px',
  },
  biosub: {
    paddingTop: '115px',
    textIndent: '720px',
  },
  text2: {
    paddingTop: '40px',
    textIndent: '140px',
  },
  text3: {
    textIndent: '140px',
  },
  backButton: {
    left: '780px',
    top: '50px',
    backgroundColor: '#CE0000',
    minWidth:'10%',
    marginRight:'50px',
    marginBottom:'200px',

},
  callButton: {
    left: '780px',
    top: '50px',
    backgroundColor: '#CE0000',
    minWidth:'10%',
    marginBottom:'200px',
},
}));

const ITEM_HEIGHT = 50;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 3 + ITEM_PADDING_TOP,
      width: 215,
    },
  },
};





export default function Match() {
  const classes = useStyles();
  return (
    <div style={{
      backgroundImage: `url(${ProfileImage})`,
      width: '100vw',
      height: '100vh',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      }}>
    <div>
      <div className={classes.bio}>
          <h2>About</h2>
          </div>
          <div className={classes.biosub}>
          <p1> I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. </p1>
      </div>

    <div className={classes.text2}>
          <h2>Wants to learn</h2>
    </div>
    <div className={classes.w2l}>
    <p1>Igbo</p1>
          <br></br>
          <p1>Igbo</p1>
          <br></br>
          <p1>Igbo</p1>
          <br></br>
          <p1>Igbo</p1>
          <br></br>
          <p1>Igbo</p1>
    </div>
    <div>
      </div>
    </div>
    <Link style={{textDecoration: 'none'}} to="/maps"><Button className={classes.backButton}>Back</Button></Link>
    <Link style={{textDecoration: 'none'}} to="/call"><Button className={classes.callButton}>Call</Button></Link>
    </div>
  );
          }


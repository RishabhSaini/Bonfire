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
import ProfileImage from "../assets/img/Profile.png";
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
  text1: {
    paddingTop: '115px',
    textIndent: '140px',
  },
  text2: {
    paddingTop: '40px',
    textIndent: '140px',
  },
  text3: {
    textIndent: '140px',
  },
  onwardButton: {
    left: '400px',
    top: '50px',
    backgroundColor: '#CE0000',
    minWidth:'50%'
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

const languages3 = [
  'Afrikaans',
  'Arabic',
  'Chewa',
  'Hausa',
  'Igbo',
  'Oromo',
  'Somali',
  'Swahili',
  'Yoruba',
  'Zulu',
];
const music3 = [
  'Afrobeat',
  'Benga',
  'Chimurenga',
  'Coupé-Decalé',
  'Fuji',
  'Isicathamiya',
  'Kizomba',
  'Makossa',
  'Mbalax',
  'Tcha tcho',
];
const cuisine3 = [
  'Beinin Cuisine',
  'Burkinabé Cuisine',
  'Gambian Cusine',
  'Ghanaian Cuisine',
  'Ivorian Cuisine',
  'Liberian Cusine',
  'Malian Cuisine',
  'Nigerian Cuisine',
  'Senegalese Cuisine',
  'Togolese Cuisine',
];
const arts3 = [
  'Dance',
  'Instruments',
  'Jewelry',
  'Painting',
  'Poetry',
  'Pottery',
  'Sculpting',
  'Singing',
  'Storytelling',
  'Textiles',
];
const history3 = [
  'Beinin History',
  'Burkinabé History',
  'Gambian Cusine',
  'Ghanaian History',
  'Ivorian History',
  'Liberian Cusine',
  'Malian History',
  'Nigerian History',
  'Senegalese History',
  'Togolese History',
];


const languages4 = [
  'Afrikaans',
  'Arabic',
  'Chewa',
  'Hausa',
  'Igbo',
  'Oromo',
  'Somali',
  'Swahili',
  'Yoruba',
  'Zulu',
];
const music4 = [
  'Afrobeat',
  'Benga',
  'Chimurenga',
  'Coupé-Decalé',
  'Fuji',
  'Isicathamiya',
  'Kizomba',
  'Makossa',
  'Mbalax',
  'Tcha tcho',
];
const cuisine4 = [
  'Beinin Cuisine',
  'Burkinabé Cuisine',
  'Gambian Cusine',
  'Ghanaian Cuisine',
  'Ivorian Cuisine',
  'Liberian Cusine',
  'Malian Cuisine',
  'Nigerian Cuisine',
  'Senegalese Cuisine',
  'Togolese Cuisine',
];
const arts4 = [
  'Dance',
  'Instruments',
  'Jewelry',
  'Painting',
  'Poetry',
  'Pottery',
  'Sculpting',
  'Singing',
  'Storytelling',
  'Textiles',
];
const history4 = [
  'Beinin History',
  'Burkinabé History',
  'Gambian Cusine',
  'Ghanaian History',
  'Ivorian History',
  'Liberian Cusine',
  'Malian History',
  'Nigerian History',
  'Senegalese History',
  'Togolese History',
];




export default function Profile() {
  const classes = useStyles();

  const [textbox, setTextbox] = React.useState([]);

  const [languages1, setLanguages1] = React.useState([]);
  const [music1, setMusic1] = React.useState([]);
  const [cuisine1, setCulinarySkills1] = React.useState([]);
  const [arts1, setarts1] = React.useState([]);
  const [history1, setHistory1] = React.useState([]);
  
  const [languages2, setLanguages2] = React.useState([]);
  const [music2, setMusic2] = React.useState([]);
  const [cuisine2, setCulinarySkills2] = React.useState([]);
  const [arts2, setarts2] = React.useState([]);
  const [history2, setHistory2] = React.useState([]);


  
  const handleChange = (event) => {
    setTextbox(event.target.value);
  };
  const changel1 = (event) => {
    setLanguages1(event.target.value);
  };
  const changel2 = (event) => {
    setLanguages2(event.target.value);
  };
  const changem1 = (event) => {
    setMusic1(event.target.value);
  };
  const changem2 = (event) => {
    setMusic2(event.target.value);
  };
  const changec1 = (event) => {
    setCulinarySkills1(event.target.value);
  };
  const changec2 = (event) => {
    setCulinarySkills2(event.target.value);
  };
  const changea1 = (event) => {
    setarts1(event.target.value);
  };
  const changea2 = (event) => {
    setarts2(event.target.value);
  };
  const changeh1 = (event) => {
    setHistory1(event.target.value);
  };
  const changeh2 = (event) => {
    setHistory2(event.target.value);
  };

  return (
    <div style={{
      backgroundImage: `url(${ProfileImage})`,
      width: '100vw',
      height: '100vh',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      }}>
    <div>
      <div className={classes.text1}>
          <h2>Tell us about yourself.</h2>
          <br></br>
      </div>

    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Bio"
          multiline
          rows={3}
          placeholder="What makes you, you?"
          value={textbox}
          onChange={handleChange}
          variant="outlined"
        />
      </div>
    </form>
    <div className={classes.text2}>
          <h2>What would you like to learn?</h2>
      </div>
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-checkbox-label">Languages</InputLabel>
        <Select
          labelId="demo-mutiple-checkbox-label"
          id="demo-mutiple-checkbox"
          multiple
          value={languages1}
          onChange={changel1}
          input={<Input />}
          MenuProps={MenuProps}
          renderValue={(selected) => selected.join(', ')}
        >
          {languages3.map((languages3) => (
            <MenuItem key={languages3} value={languages3}>
              <Checkbox checked={languages1.indexOf(languages3) > -1} />
              <ListItemText primary={languages3} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-checkbox-label">Music</InputLabel>
        <Select
          labelId="demo-mutiple-checkbox-label"
          id="demo-mutiple-checkbox"
          multiple
          value={music1}
          onChange={changem1}
          input={<Input />}
          MenuProps={MenuProps}
          renderValue={(selected) => selected.join(', ')}
        >
          {music3.map((music3) => (
            <MenuItem key={music3} value={music3}>
              <Checkbox checked={music1.indexOf(music3) > -1} />
              <ListItemText primary={music3} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-checkbox-label">Cuisine</InputLabel>
        <Select
          labelId="demo-mutiple-checkbox-label"
          id="demo-mutiple-checkbox"
          multiple
          value={cuisine1}
          onChange={changec1}
          input={<Input />}
          MenuProps={MenuProps}
          renderValue={(selected) => selected.join(', ')}
        >
          {cuisine3.map((cuisine3) => (
            <MenuItem key={cuisine3} value={cuisine3}>
              <Checkbox checked={cuisine1.indexOf(cuisine3) > -1} />
              <ListItemText primary={cuisine3} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-checkbox-label">Arts</InputLabel>
        <Select
          labelId="demo-mutiple-checkbox-label"
          id="demo-mutiple-checkbox"
          multiple
          value={arts1}
          onChange={changea1}
          input={<Input />}
          MenuProps={MenuProps}
          renderValue={(selected) => selected.join(', ')}
        >
          {arts3.map((arts3) => (
            <MenuItem key={arts3} value={arts3}>
              <Checkbox checked={arts1.indexOf(arts3) > -1} />
              <ListItemText primary={arts3} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-checkbox-label">History</InputLabel>
        <Select
          labelId="demo-mutiple-checkbox-label"
          id="demo-mutiple-checkbox"
          multiple
          value={history1}
          onChange={changeh1}
          input={<Input />}
          MenuProps={MenuProps}
          renderValue={(selected) => selected.join(', ')}
        >
          {history3.map((history3) => (
            <MenuItem key={history3} value={history3}>
              <Checkbox checked={history1.indexOf(history3) > -1} />
              <ListItemText primary={history3} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      </div>
      <div className={classes.text3}>
          <h2>What would you like to teach?</h2>

      </div>
      <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-checkbox-label">Languages</InputLabel>
        <Select
          labelId="demo-mutiple-checkbox-label"
          id="demo-mutiple-checkbox"
          multiple
          value={languages2}
          onChange={changel2}
          input={<Input />}
          MenuProps={MenuProps}
          renderValue={(selected) => selected.join(', ')}
        >
          {languages4.map((languages4) => (
            <MenuItem key={languages4} value={languages4}>
              <Checkbox  checked={languages2.indexOf(languages4) > -1} />
              <ListItemText primary={languages4} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-checkbox-label">Music</InputLabel>
        <Select
          labelId="demo-mutiple-checkbox-label"
          id="demo-mutiple-checkbox"
          multiple
          value={music2}
          onChange={changem2}
          input={<Input />}
          MenuProps={MenuProps}
          renderValue={(selected) => selected.join(', ')}
        >
          {music4.map((music4) => (
            <MenuItem key={music4} value={music4}>
              <Checkbox checked={music2.indexOf(music4) > -1} />
              <ListItemText primary={music4} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-checkbox-label">Cuisine</InputLabel>
        <Select
          labelId="demo-mutiple-checkbox-label"
          id="demo-mutiple-checkbox"
          multiple
          value={cuisine2}
          onChange={changec2}
          input={<Input />}
          MenuProps={MenuProps}
          renderValue={(selected) => selected.join(', ')}
        >
          {cuisine4.map((cuisine4) => (
            <MenuItem key={cuisine4} value={cuisine4}>
              <Checkbox checked={cuisine2.indexOf(cuisine4) > -1} />
              <ListItemText primary={cuisine4} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-checkbox-label">Arts</InputLabel>
        <Select
          labelId="demo-mutiple-checkbox-label"
          id="demo-mutiple-checkbox"
          multiple
          value={arts2}
          onChange={changea2}
          input={<Input />}
          MenuProps={MenuProps}
          renderValue={(selected) => selected.join(', ')}
        >
          {arts4.map((arts4) => (
            <MenuItem key={arts4} value={arts4}>
              <Checkbox checked={arts2.indexOf(arts4) > -1} />
              <ListItemText primary={arts4} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-checkbox-label">History</InputLabel>
        <Select
          labelId="demo-mutiple-checkbox-label"
          id="demo-mutiple-checkbox"
          multiple
          value={history2}
          onChange={changeh2}
          input={<Input />}
          MenuProps={MenuProps}
          renderValue={(selected) => selected.join(', ')}
        >
          {history4.map((history4) => (
            <MenuItem key={history4} value={history4}>
              <Checkbox checked={history2.indexOf(history4) > -1} />
              <ListItemText primary={history4} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      </div>
    </div>
    <Link style={{textDecoration: 'none'}} to="/maps"><Button className={classes.onwardButton}>ONWARD!</Button></Link>
    </div>
  );
          }


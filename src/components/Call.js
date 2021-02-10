import React from "react";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { makeStyles } from '@material-ui/core/styles';
import Jitsi from "react-jitsi";
import CallImage from "../assets/img/Call.png"
import FireFrame from '../assets/img/FireFrame.png'
import Button from "../ui-components/CustomButtons/Button.js";
import { Hidden } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
    backToMap: {
        left: '450px',
        top: '650px',
        backgroundColor: '#CE0000',
        minWidth:'45%',
    },
  }));

const Call = () => {
  const classes = useStyles();
  const token = localStorage.token;
  const decoded = jwt_decode(token);
  const email = decoded.identity.email;
  const name = decoded.identity.firstName + " " + decoded.identity.lastName;
  const roomName = email + name;

  const handleAPI = (JitsiMeetAPI) => {
    console.log(JitsiMeetAPI);
  };

  return (
    <div style={{
        position:'absolute',
        backgroundImage: `url(${CallImage})`,
        width: '100vw',
        height: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex:-10,
        overflow: 'hidden',
        }}>
    <Link style={{textDecoration: 'none'}} to="/maps"><Button className={classes.backToMap}>Back to map</Button></Link>
    <div style={{paddingLeft:'25%', paddingTop: '12%'}}>
    <img style={{position: 'absolute',height: '882px', width: '1290px', marginTop: '-239px', marginLeft: '-240px', zIndex:-1}} src={FireFrame} alt="Fire Frame"/>
    <Jitsi 
      onAPILoad={handleAPI}
      roomName={roomName}
      displayName={name}
      config={{ prejoinPageEnabled: false }}
    />
    </div>
    </div>
  );
};

export default Call;
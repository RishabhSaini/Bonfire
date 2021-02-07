import React, { useState } from "react";
import { Link, Redirect, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { makeStyles } from '@material-ui/core/styles';
import Jitsi from "react-jitsi";
import CallImage from "../assets/img/Call.png"
import Button from "../ui-components/CustomButtons/Button.js";
import zIndex from "@material-ui/core/styles/zIndex";

const useStyles = makeStyles((theme) => ({
    calling: {
      paddingTop: '180.5px',
      paddingLeft: '23.7%',
    },
    backToMap: {
        left: '420px',
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
        backgroundImage: `url(${CallImage})`,
        width: '100vw',
        height: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        }}>
    <Link style={{textDecoration: 'none'}} to="/maps"><Button className={classes.backToMap}>Back to map</Button></Link>
    <div className={classes.calling}>
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
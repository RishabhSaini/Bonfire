import React, { useState } from "react";
import { Link, Redirect, Route, Switch } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import jwt_decode from "jwt-decode";
import Jitsi from "react-jitsi";
import callBackground from "../assets/img/Call.png"

const useStyles = makeStyles((theme) => ({
    video: {
    marginLeft: '360px',
    marginTop: '220px',
    }

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
        backgroundImage: `url(${callBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
        //height: '100vh',
        
        }}>
    <div className={classes.video}>
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

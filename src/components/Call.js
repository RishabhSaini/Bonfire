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
  
=======
import { Row, Col, Container } from 'react-bootstrap';
import './Call.css';


const Call = () => {
  const classes = useStyles();
  const token = localStorage.token;
  // const decoded = jwt_decode(token);
  const email = "asdas";
  const name = "Asdas";
  const roomName = "asdas";
  // const email = decoded.identity.email;
  // const name = decoded.identity.firstName + " " + decoded.identity.lastName;
  // const roomName = email + name;

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
=======
    <Container fluid >
    <Row>
      <Col className="text-center verticalCenter">
        <div className="text-center mx-auto ">
    <Jitsi
      className="widthswap"
      onAPILoad={handleAPI}
      roomName={roomName}
      displayName={name}
      config={{ prejoinPageEnabled: false }}
    />
    </div>
    </div>
=======
    </Col>
    </Row>
    </Container>
  );
};

export default Call;

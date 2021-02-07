import React, { useState } from "react";
import { Link, Redirect, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Jitsi from "react-jitsi";
import { Row, Col, Container } from 'react-bootstrap';
import './Call.css';

const Call = () => {
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
    </Col>
    </Row>
    </Container>
  );
};

export default Call;

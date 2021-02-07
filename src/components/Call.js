import React from "react";
import React, { useState } from "react";
import { Link, Redirect, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Jitsi from "react-jitsi";

const Call = () => {
  const token = localStorage.token;
  const decoded = jwt_decode(token);
  const email = decoded.identity.email;
  const name = decoded.identity.firstName + " " + decoded.identity.lastName;
  const roomName = email + name;

  const handleAPI = (JitsiMeetAPI) => {
    console.log(JitsiMeetAPI);
  };

  return (
    <Jitsi
      onAPILoad={handleAPI}
      roomName={roomName}
      displayName={name}
      config={{ prejoinPageEnabled: false }}
    />
  );
};

export default Call;

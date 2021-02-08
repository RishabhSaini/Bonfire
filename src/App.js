import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Signup from "./components/Signup";
import Maps from "./components/Maps";
import Match from "./components/Match";
import GridItem from "./ui-components/Grid/GridItem";
import GridContainer from "./ui-components/Grid/GridContainer";
import Button from "./ui-components/CustomButtons/Button";
import LandingPage from "./components/LandingPage";
import red from '@material-ui/core/colors/red';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import Call from "./components/Call"
import About from "./components/About"
import Contact from "./components/Contact"

function App() {

  const theme = createMuiTheme({
    palette: {
      primary: red,
    },
  });
  return (
    <MuiThemeProvider theme={theme}>
    <Router>
      <div className="App">   
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/profile" component={Profile} />
          <Route path="/maps" component={() => <Maps cluster={Math.floor(Math.random() * (11 - 0 + 1)) + 0} />} />
          <Route path="/match" component={Match} />
          <Route path="/call" component={Call} />
          <Route path="/about" component={About} />
          <Route path="/contact-us" component={Contact} />
        </Switch>
        </div>
    </Router>
    </MuiThemeProvider>
    
  );
}

export default App;

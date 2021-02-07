import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Signup from "./components/Signup";
import Maps from "./components/Maps";
import GridItem from "./ui-components/Grid/GridItem";
import GridContainer from "./ui-components/Grid/GridContainer";
import Button from "./ui-components/CustomButtons/Button";
import LandingPage from "./components/LandingPage";
import red from '@material-ui/core/colors/red';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';

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
          <Route path="/maps" component={Maps} />
        </Switch>
        </div>
    </Router>
    </MuiThemeProvider>
    
  );
}

export default App;

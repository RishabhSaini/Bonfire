import React from "react"
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton';
import AppAppBar from "./AppAppBar";
// import MenuIcon from '@material-ui/core/MenuIcon';
import backgroundSVG from '../assets/img/Home.svg';

const styles = {
    landingPage: {
        backgroundImage:`url(${backgroundSVG})`
    }
}

function LandingPage() {
    return (
        <div>
        <AppAppBar></AppAppBar>
        <h1 >"HI"</h1>
        </div>
    );
}

export default LandingPage;
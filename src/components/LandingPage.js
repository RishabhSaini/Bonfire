import React from "react"
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton';
import AppAppBar from "./AppAppBar";
// import MenuIcon from '@material-ui/core/MenuIcon';
import backgroundSVG from '../assets/img/Home.svg';
import { Row, Col, Container } from 'react-bootstrap';
const styles = {
    landingPage: {
        backgroundImage:`url(${backgroundSVG})`
    }
}
const centerAll = {
    verticalCenter: {
        minHeight: '100%',  /* Fallback for browsers do NOT support vh unit */
        minHeight: '100vh', /* These two lines are counted as one :-)       */
      
        display: 'flex',
        alignItems: 
        'center'
      }

}

function LandingPage() {
    return (
        <div>
        <AppAppBar></AppAppBar>
        <Container fluid style={styles.LandingPage}>
  <Row>
    <Col style={centerAll.verticalCenter} className="text-center" md={6}>
        <div className="text-center">
            <h1>Bonfire</h1>
            <h2>Connect from Africa.</h2>
        </div>
    </Col>
    <Col className="text-center" md={6}>1 of 1</Col>
  </Row>
</Container>
        </div>
    );
}

export default LandingPage;
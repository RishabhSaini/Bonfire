import React from "react"
import AppAppBar from "./AppAppBar";
import backgroundSVG from '../assets/img/Home.svg';
import BonfireLogo from '../assets/img/BonfireLogo.png';
import Africa from '../assets/img/Africa.png'
import Button from "../ui-components/CustomButtons/Button.js";
import './LandingPage.css';
import { Row, Col, Container } from 'react-bootstrap';
const styles = {
    landingPage: {
        backgroundImage:`url(${backgroundSVG})`
    }
}

function LandingPage() {
    return (
        <div>
        <AppAppBar></AppAppBar>
        <Container fluid style={styles.LandingPage}>
  <Row>
    <Col className="text-center verticalCenter" md={6}>
        <div className="bonfire-logo-heading">
            <img src={BonfireLogo} alt="Bonfire Logo"/>
            <div className="bonfire-logo-title">
                <h2>Reigniting African Culture</h2>
            </div>
        </div>
        <div className="heading-description">   
            <p>With Bonfire, you can connect, and swap skills with people of African culture. Learn about Africa, and more.</p>
        </div>
        <div className="two-buttons">
            <Button className="login-button">LOGIN</Button>
            <Button className="signup-button">SIGNUP</Button>
        </div>
    </Col>
    <Col className="africa-map" md={4}>
        <img className="africa-pic" src={Africa} alt="Africa"/>
    </Col>
  </Row>
</Container>
        </div>
    );
}

export default LandingPage;
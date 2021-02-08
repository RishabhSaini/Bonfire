import React from "react"
import AboutAppBar from "./AboutAppBar";
import AboutLogo from '../assets/img/AboutLogo.png';
import Africa from '../assets/img/Africa.png'
import { Link } from 'react-router-dom';
import Button from "../ui-components/CustomButtons/Button.js";
import './LandingPage.css';
import { Row, Col, Container } from 'react-bootstrap';
import { Height } from "@material-ui/icons";

function LandingPage() {
    return (
        <div>
        <AboutAppBar></AboutAppBar>
        <Container fluid>
  <Row>
    <Col className="text-center verticalCenter" md={6}>
        <div className="bonfire-logo-heading">
            <img src={AboutLogo} alt="About Logo"/>
            </div>
            <div className="bonfire-logo-title">
                <h2>Who are we?</h2>
            </div>

        <div className="heading-description">   
            <p>Just 4 guys trying to rekindle the flame of African culture</p>     
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
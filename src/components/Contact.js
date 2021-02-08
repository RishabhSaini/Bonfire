import React from "react"
import ContactAppBar from "./ContactAppBar";
import ContactLogo from '../assets/img/ContactLogo.png';
import Africa from '../assets/img/Africa.png'
import { Link } from 'react-router-dom';
import Button from "../ui-components/CustomButtons/Button.js";
import './LandingPage.css';
import { Row, Col, Container } from 'react-bootstrap';


function LandingPage() {
    return (
        <div>
        <ContactAppBar></ContactAppBar>
        <Container fluid >
  <Row>
    <Col className="text-center verticalCenter" md={6}>
        <div className="bonfire-logo-heading">
            <img src={ContactLogo} alt="Contact Logo"/>
            </div>
            <div className="bonfire-logo-title">
                <h2>Want to reach out?</h2>
            </div>

        <div className="heading-description">   
            <p>Send an email to: eggsploding@gmail.com</p>     
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
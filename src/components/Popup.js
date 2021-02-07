import React from "react";
import "./Popup.css";
import Button from "../ui-components/CustomButtons/Button.js";
import InputAdornment from "@material-ui/core/InputAdornment";
import FaceIcon from "@material-ui/icons/Face";
import Card from "../ui-components/Card/Card";
import CardBody from "../ui-components/Card/CardBody.js";

const Popup = (props) => {
    return (
        <>
            <div className="popup-header">
            <div className="popup-header-name">
                <h3>{props.Name}</h3> 
            </div>
            <Button className="popup-button">
                <InputAdornment position="start">
                <FaceIcon />
                </InputAdornment>
                <span>Profile</span>
            </Button>
            </div>
            <div className="popup-body">
                <Card>
                    <CardBody>
                        <p class="popup-span">Languages: {props.Languages[0]}, {props.Languages[1]}</p>
                        <br/>
                        <p class="popup-span">Music: {props.Music[0]}, {props.Music[1]}</p>
                        <br/>
                        <p class="popup-span">Arts: {props.Arts[0]}, {props.Arts[1]}</p>
                        <br/>
                    </CardBody>
                </Card>
            </div>
      </>
    );

};

export default Popup;

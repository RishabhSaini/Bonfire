import React from "react";
import "./Popup.css";
import Button from "../ui-components/CustomButtons/Button.js";
import InputAdornment from "@material-ui/core/InputAdornment";
import FaceIcon from "@material-ui/icons/Face";
import Card from "../ui-components/Card/Card";
import CardBody from "../ui-components/Card/CardBody.js";
import { Link } from "react-router-dom";

const Popup = (props) => {

    const props_ = props.data; 

  return (
    <>
      <div className="popup-header">
        <div className="popup-header-name">
          <h3>{props_.Name}</h3>
        </div>
        <Link style={{textDecoration: 'none'}} to={{ pathname: "/match", state: { props_: props_} }}>
          <Button className="popup-button">
            <InputAdornment position="start">
              <FaceIcon />
            </InputAdornment>
            <span>Profile</span>
          </Button>
        </Link>
      </div>
      <div className="popup-body">
        <Card>
          <CardBody>
            <p class="popup-span">
              Languages: {props_.Languages[0]}, {props_.Languages[1]}
            </p>
            <br />
            <p class="popup-span">
              Music: {props_.Music[0]}, {props_.Music[1]}
            </p>
            <br />
            <p class="popup-span">
              Arts: {props_.Arts[0]}, {props_.Arts[1]}
            </p>
            <br />
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default Popup;

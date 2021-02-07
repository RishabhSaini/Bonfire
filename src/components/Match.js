import React from "react";
import ProfileImage from "../assets/img/Match.png";
import Card from "../ui-components/Card/Card";
import CardBody from "../ui-components/Card/CardBody.js";
import Grid from "@material-ui/core/Grid";
import Button from "../ui-components/CustomButtons/Button.js";
import { Link } from "react-router-dom";
import './Match.css'

const Match = (props) => {
  const { props_ } = props.location.state;
  console.log(props_);

  // "Languages": ["Igbo", "Swahili", "Afrikaans"],
  // "Music": ["Coupe-Decale", "Kizomba", "Benga"],
  // "Cuisine": ["Malian Cuisine", "Beinin Cuisine", "Ghanaian Cuisine"],
  // "Arts": ["Dance", "Sculpting", "Textiles"],
  // "History": ["Beinin History", "Burkinabe History", "Liberian Cusine"],

  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
        className="page-div"
      >
        <Card style={{ width: "20rem" }}>
          <Button disabled={true} className="match-header">
            <h4>{props_.Name}</h4>
          </Button>
          <CardBody>
            <article class="popup-span">{props_.Bios}</article>
            <br/>
            <p className="match-bio">
              Languages: {props_.Languages[0]}, {props_.Languages[1]}
            </p>
            <p className="match-bio">
              Music: {props_.Music[0]}, {props_.Music[1]}
            </p>
            <p className="match-bio">
              Arts: {props_.Arts[0]}, {props_.Arts[1]}
            </p>
            <p className="match-bio">
              Cuisine: {props_.Cuisine[0]}, {props_.Cuisine[1]}
            </p>
            <p className="match-bio">
              History: {props_.Cuisine[0]}, {props_.Cuisine[1]}
            </p>
            <div className="two-buttons-match">
              <Link style={{ textDecoration: "none" }} to="/maps">
                <Button className="match-buttons">Back</Button>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/call">
                <Button className="match-buttons">Call</Button>
              </Link>
            </div>
          </CardBody>
        </Card>
      </Grid>
    </>
  );
};

export default Match;

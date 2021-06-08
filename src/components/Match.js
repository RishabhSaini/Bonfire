import React from "react";
import Card from "../ui-components/Card/Card";
import CardBody from "../ui-components/Card/CardBody.js";
import Grid from "@material-ui/core/Grid";
import Button from "../ui-components/CustomButtons/Button.js";
import { Link } from "react-router-dom";
import "./Match.css";

const Match = (props) => {
  const { props_ } = props.location.state;
  const languages = [
    "Afrikaans",
    "Arabic",
    "Chewa",
    "Hausa",
    "Igbo",
    "Oromo",
    "Somali",
    "Swahili",
    "Yoruba",
    "Zulu",
  ];

  const learn = (languages) => {
    var languages_ = languages;

    for (var i=0; i < props_.Languages.length; i++) {
      if (languages_.includes(props_.Languages[i])) {
        var index = languages_.indexOf(props_.Languages[i]);
        languages_.splice(index, 1);
      }
    }
    if(props_.Languages.length === 2){
      props_.Languages.push(languages_[0]);
      languages_.splice(0,1);
    }

    languages_.splice(3);

    return languages_;
  };
  

  const print_array = (info) => {
    return (
      <>
        {info &&
          info.map((items) => {
            return(
              <p style = {{lineHeight:"1px", paddingTop:"10px"}} className="array-paragraphs">{items}</p>
            );
          })}
      </>
    );
  };

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
        <Card style={{ width: "30rem" }}>
          <Button disabled={true} className="match-header">
            <h4>{props_.Name}</h4>
          </Button>
          <CardBody>
            <article class="popup-span" style= {{textAlign: 'center', color:'#791010'}}>{props_.Bios}</article>
            <br />
            <div className="match-grid">
              <div>
                <h6 style = {{color:'#791010'}}className="learn-match">What {props_.Name} would like to teach</h6>
                {print_array(props_.Languages)}
              </div>
              <div>
                <h6 style = {{color:'#791010'}} className="learn-match">What {props_.Name} would like to learn</h6>
                {print_array(learn(languages))}
              </div>
            </div>
            <br></br>
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

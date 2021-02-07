import React from "react";
import ProfileImage from "../assets/img/Match.png";
import Card from "../ui-components/Card/Card";
import CardBody from "../ui-components/Card/CardBody.js";
import Grid from "@material-ui/core/Grid";
import Button from "../ui-components/CustomButtons/Button.js";
import { Link } from "react-router-dom";
import "./Match.css";

const Match = (props) => {
  const { props_ } = props.location.state;
  console.log(props_);

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

    for (var i; i < props_.Languages.length; i++) {
      if (languages_.includes(props_.Languages[i])) {
        var index = languages_.indexOf(props_.Languages[i]);
        languages_.splice(index, 1);
      }
    }

    return languages_;
  };

  const print_array = (info) => {
    return (
      <>
        {info &&
          info.map((items) => {
            return(
              <p className="array-paragraphs">{items}</p>
            );
          })}
      </>
    );
  };

  return (

    <div style={{
      backgroundImage: `url(${ProfileImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      height: '100vw',
      }}>
    <div>
    <div className={classes.name}>
          <h1>{props_.Name}</h1>
     </div>
      <div className={classes.bio}>
          <h4>{props_.Bios}</h4>
     </div>
          <div className={classes.biosub}>
          <p1>  </p1>
      </div>
    <div className={classes.w2l}>
          <h5>Wants to learn</h5>
    </div>
    <div className={classes.w2llist}>
    <p1>Igbo</p1>
          <br></br>
          <p1>Igbo</p1>
          <br></br>
          <p1>Igbo</p1>
          <br></br>
          <p1>Igbo</p1>
          <br></br>
          <p1>Igbo</p1>
    </div>
    <div className={classes.w2t}>
          <h5>Wants to teach</h5>
    </div>
    <div className={classes.w2tlist}>
    <p1>Igbo</p1>
          <br></br>
          <p1>Igbo</p1>
          <br></br>
          <p1>Igbo</p1>
          <br></br>
          <p1>Igbo</p1>
          <br></br>
          <p1>Igbo</p1>
    </div>
    <div>
      </div>
    </div>
    <Link style={{textDecoration: 'none'}} to="/maps"><Button className={classes.backButton}>Back</Button></Link>
    <Link style={{textDecoration: 'none'}} to="/call"><Button className={classes.callButton}>Call</Button></Link>
    </div>
=======
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
            <br />
            {/* <p className="match-bio">
              Languages: {props_.Languages[0]}, {props_.Languages[1]}
            </p>
            <p className="match-bio">
              Music: {props_.Music[0]}, {props_.Music[1]}
            </p>
            <p className="match-bio">
              Arts: {props_.Arts[0]}, {props_.Arts[1]}
            </p> */}
            <div className="match-grid">
              <div>
                <h6 className="learn-match">What you would I like to learn</h6>
                {print_array(props_.Languages)}
              </div>
              <div>
                <h6 className="learn-match">What you would I like to teach</h6>
                {print_array(learn(languages))}
              </div>
            </div>
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

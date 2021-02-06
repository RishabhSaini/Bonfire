import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "../ui-components/Card/Card";
import CardBody from "../ui-components/Card/CardBody.js";
import Button from "../ui-components/CustomButtons/Button.js";
import GoogleLogo from "../assets/img/GoogleLogo.png";
import imagesStyles from "../assets/jss/material-kit-react/imagesStyles.js";
import { cardTitle } from "../assets/jss/material-kit-react";
import Grid from "@material-ui/core/Grid";
import EmailIcon from "@material-ui/icons/Email";
import InputAdornment from "@material-ui/core/InputAdornment";
import LockIcon from "@material-ui/icons/Lock";
import CustomInput from "../ui-components/CustomInput/CustomInput.js";
import "./Signup.css";

const styles = {
  ...imagesStyles,
  cardTitle,
};

const useStyles = makeStyles(styles);

const Signup = () => {
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
        className = "page-div"
      >
        <Grid item xs={3}>
          <Card style={{ width: "20rem" }} className="signup-card">
            <CardBody>
              <h2 className={classes.cardTitle}>Login</h2>
              <Button className="google-button">
                <img src={GoogleLogo} className="google-logo" />
                <div className="google-signup-description">
                  Login with Google
                </div>
              </Button>
              <br />
              <div className="demarcation">
                {" "}
                ----- OR LOGIN WITH EMAIL -----{" "}
              </div>
              <CustomInput
                labelText="Email"
                id="regular"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <CustomInput
                labelText="Password"
                id="regular"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </CardBody>
            <Button className="submit-button">
              <div>Login</div>
            </Button>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Signup;

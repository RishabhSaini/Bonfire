import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "../ui-components/Card/Card";
import CardBody from "../ui-components/Card/CardBody.js";
import Button from "../ui-components/CustomButtons/Button.js";
import GoogleLogo from "../assets/img/GoogleLogo.png";
import imagesStyles from "../assets/jss/material-kit-react/imagesStyles.js";
import { cardTitle } from "../assets/jss/material-kit-react";
import Grid from "@material-ui/core/Grid";
import FaceIcon from "@material-ui/icons/Face";
import EmailIcon from "@material-ui/icons/Email";
import InputAdornment from "@material-ui/core/InputAdornment";
import LockIcon from "@material-ui/icons/Lock";
import CustomInput from "../ui-components/CustomInput/CustomInput.js";
import "./Signup.css";
import { Link, Redirect } from "react-router-dom";


const styles = {
  ...imagesStyles,
  cardTitle,
};

const useStyles = makeStyles(styles);

const Signup = () => {
  const classes = useStyles();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allowLogin, setAllowLogin] = useState(false);

  const onSubmitClick = (e) => {
    e.preventDefault();
    let opts = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };
    console.log(opts);
    fetch("/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(opts),
    }).then((r) => {
      if (r.status == 200) {
        setAllowLogin(true);
      }
    });
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      {allowLogin ? <Redirect to="/profile" /> : <Redirect to="/signup" />}
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
        className="page-div"
      >
        <Grid item xs={3}>
          <Card style={{ width: "20rem" }} className="signup-card">
            <CardBody>
              <h2 className={classes.cardTitle}>Sign Up For Free</h2>
              <Button className="google-button">
                <img src={GoogleLogo} className="google-logo" />
                <div className="google-signup-description">
                  Sign up with Google
                </div>
              </Button>
              <br />
              <div className="demarcation">
                {" "}
                ----- OR SIGN UP WITH EMAIL -----{" "}
              </div>
              <CustomInput
                labelText="First Name"
                id="regular"
                formControlProps={{
                  type: "text",
                  onChange: (e) => handleFirstNameChange(e),
                  value: firstName,
                  fullWidth: true,
                }}
                inputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <FaceIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <CustomInput
                labelText="Last Name"
                id="regular"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  type: "text",
                  onChange: (e) => handleLastNameChange(e),
                  value: lastName,
                  endAdornment: (
                    <InputAdornment position="start">
                      <FaceIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <CustomInput
                labelText="Email"
                id="regular"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  type: "email",
                  onChange: (e) => handleEmailChange(e),
                  value: email,
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
                  type: "password",
                  onChange: (e) => handlePasswordChange(e),
                  value: password,
                  endAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </CardBody>
            <Button
              type="submit"
              onClick={onSubmitClick}
              className="submit-button-signup"
            >
              <div>Get Started</div>
            </Button>
            <div className="bottom-info">
              Already have an account?{" "}
              <Link style={{textDecoration: 'none'}} to="/login"><Button className="login-button2">Log in</Button></Link>
            </div>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Signup;

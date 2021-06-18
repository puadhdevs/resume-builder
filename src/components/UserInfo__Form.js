import React, { useEffect, useState } from "react";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import ContactsIcon from "@material-ui/icons/Contacts";
import { useStateValue } from "../store/StateProvider";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  logo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    width: "95%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  btnFloat: {
    display: "flex",
    float: "right",
    margin: "20px 0",
  },
}));

function UserInfo__Form({ nextStep }) {

  const initialState = {
    fullName: "",
    mobile: "",
    alt_mobile: "",
    email: "",
    address: "",
    city: "",
    pincode: "",
    state: "",
  }
  const [userState, setUserState] = useState(initialState);

  const [{ }, dispatch] = useStateValue()

  const addUserInfo = () => {
    // dispatch the item into data layer 
    dispatch({
      type: "ADD_USER_INFO",
      payload: {

        fullName: userState.fullName,
        mobile: userState.mobile,
        alt_mobile: userState.alt_mobile,
        email: userState.email,
        address: userState.address,
        city: userState.city,
        pincode: userState.pincode,
        state: userState.state

      },
    });

  
    // calling the next step
    nextStep()
  };


  const handle_UserState_Change = (e) => {
    const { name, value } = e.target;

    setUserState({
      ...userState,
      [name]: value,
    });
    // addUserInfo()

  };

 

 

  const classes = useStyles();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"))

    if (userInfo) {
     
      setUserState(userInfo)
    }
  }, [])

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography
          className={classes.logo}
          align="center"
          component="h1"
          variant="h5"
          gutterBottom
        >
          <Avatar className={classes.avatar}>
            <ContactsIcon />
          </Avatar>
          Personal Details
        </Typography>

        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                autoComplete="fullName"
                name="fullName"
                variant="outlined"
                required
                fullWidth
                value={userState.fullName}
                onChange={(e) => handle_UserState_Change(e)}
                id="fullName"
                label="Full Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={6} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="mobile"
                label="Mobile No."
                name="mobile"
                autoComplete="mobile"
                value={userState.mobile}
                onChange={(e) => handle_UserState_Change(e)}
              />
            </Grid>
            <Grid item xs={6} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                id="mobile"
                label="Alt Mobile No."
                name="alt_mobile"
                autoComplete="alt_mobile"
                value={userState.alt_mobile}
                onChange={(e) => handle_UserState_Change(e)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={userState.email}
                onChange={(e) => handle_UserState_Change(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="address"
                autoComplete="address"
                label="Address"
                id="address"
                value={userState.address}
                onChange={(e) => handle_UserState_Change(e)}
              />
            </Grid>

            <Grid item xs={4} sm={4}>
              <TextField
                variant="outlined"
                fullWidth
                id="city"
                label="City"
                name="city"
                autoComplete="city"
                value={userState.city}
                onChange={(e) => handle_UserState_Change(e)}
              />
            </Grid>

            <Grid item xs={4} sm={4}>
              <TextField
                variant="outlined"
                fullWidth
                id="pincode"
                label="Pincode"
                name="pincode"
                autoComplete="pincode"
                value={userState.pincode}
                onChange={(e) => handle_UserState_Change(e)}
              />
            </Grid>
            <Grid item xs={4} sm={4}>
              <TextField
                variant="outlined"
                fullWidth
                id="state"
                label="State"
                name="state"
                autoComplete="state"
                value={userState.state}
                onChange={(e) => handle_UserState_Change(e)}
              />
            </Grid>
          </Grid>

       

          <Button
            className={classes.btnFloat}
            variant="contained"
            color="secondary"
            onClick={addUserInfo}
          >
            Save & Next
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default UserInfo__Form;

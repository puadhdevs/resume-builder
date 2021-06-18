import { React, useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";

import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionActions from "@material-ui/core/AccordionActions";
import CardMembershipIcon from "@material-ui/icons/CardMembership";
import Divider from "@material-ui/core/Divider";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStateValue } from "../store/StateProvider";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  alert: {
    margin: "10px 0",
    width: "100%",
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

  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  btnFloat: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px 0",
  },
}));

export default function Certification__Form({

  nextStep,
  prevStep,
}) {

  const [{ }, dispatch] = useStateValue()
  const classes = useStyles();
  const [certificate_state, setCertificate_state] = useState([
    {
      certificate_name: "",
      certificate_url: "",

      certificate_description: "",
    },
  ]);

  const handle_certificateState_Change = (e, index) => {
    const { name, value } = e.target;

    const values = [...certificate_state];

    values[index][name] = value;
    setCertificate_state(values);

  };

  const handleAddForm = () => {
    setCertificate_state([
      ...certificate_state,
      {
        certificate_name: "",
        certificate_url: "",

        certificate_description: "",
      },
    ]);
  };

  const handleRemoveForm = (index) => {
    const values = [...certificate_state];
    values.splice(index, 1);
    setCertificate_state(values);

    dispatch({
      type: "ADD_USER_CERTIFICATION",
      payload: values,

    });
  };

 
  const addUserCertification = () => {

    dispatch({
      type: "ADD_USER_CERTIFICATION",
      payload: certificate_state,

    });

    // calling next
    nextStep()
  };

  useEffect(() => {
    const certificate_local = JSON.parse(localStorage.getItem("certificate"))

    if (certificate_local) {

      setCertificate_state(certificate_local)
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
            <CardMembershipIcon />
          </Avatar>
          Certification
        </Typography>

        {certificate_state.map((value, index) => (
          <div key={index} style={{ marginBottom: 10 }}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                id="panel1a-header"
              >
                {value.certificate_name ? (
                  <Typography className="">{value.certificate_name}</Typography>
                ) : (
                  "Certificate Name"
                )}
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      label="certificate Name"
                      variant="outlined"
                      value={value.certificate_name}
                      name="certificate_name"
                      onChange={(e) => handle_certificateState_Change(e, index)}
                      fullWidth
                    />
                  </Grid>

                  <Grid item xs={12} sm={12}>
                    <TextField
                      label="certificate Description"
                      multiline
                      rows={4}
                      variant="outlined"
                      value={value.certificate_description}
                      name="certificate_description"
                      onChange={(e) => handle_certificateState_Change(e, index)}
                      fullWidth
                    />
                  </Grid>

                  <Grid item xs={12} sm={12}>
                    <TextField
                      label="certificate Url"
                      variant="outlined"
                      value={value.certificate_url}
                      name="certificate_url"
                      onChange={(e) => handle_certificateState_Change(e, index)}
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </AccordionDetails>

              <Divider />
              <AccordionActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={(e) => handleRemoveForm(index)}
                >
                  Delete
                </Button>
              </AccordionActions>
            </Accordion>
          </div>
        ))}
      </div>

      <div className={classes.btnFloat}>
        <Button variant="contained" color="primary" onClick={prevStep}>
          Back
        </Button>
              <Fab aria-label="add" size="small" onClick={handleAddForm}>
          <AddIcon />
        </Fab>
        <Button variant="contained" color="secondary" onClick={addUserCertification}>
          SAVE & Next
        </Button>

      </div>
    </Container>
  );
}

import { React, useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionActions from "@material-ui/core/AccordionActions";
import Avatar from "@material-ui/core/Avatar";
import DeveloperModeIcon from "@material-ui/icons/DeveloperMode";
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

export default function Project_Form({  nextStep, prevStep }) {
  const classes = useStyles();
  const [{ },dispatch] = useStateValue()
  const [project_state, setProject_state] = useState([
    {
      project_name: "",
      project_url: "",
      project_start_date: "",
      project_finish_date: "",

      project_description: "",
    },
  ]);

  // const addUserProject = () => {
  //   // dispatch the item into data layer 
  //   dispatch({
  //     type: "ADD_USER_PROJECT",
  //     payload: {
  //       project: [...project_state]

  //     },
  //   });
  //   console.log(" #### state Provider satae #####", state)
  // };

  const handle_ProjectState_Change = (e, index) => {
    const { name, value } = e.target;

    const values = [...project_state];

    values[index][name] = value;
    setProject_state(values);

  };

  const handleAddForm = () => {
    setProject_state([
      ...project_state,
      {
        project_name: "",
        project_url: "",
        project_start_date: "",
        project_finish_date: "",
        project_description: "",
      },
    ]);
  };

  const handleRemoveForm = (index) => {
    const values = [...project_state];
    values.splice(index, 1);
    setProject_state(values);

    dispatch({
      type: "ADD_USER_PROJECT",
      payload: values,

    });
  };

  const addUserProject = () => {

    dispatch({
      type: "ADD_USER_PROJECT",
      payload: project_state,

    });

    // calling next
    nextStep()
  };


  useEffect(() => {
    const project_local = JSON.parse(localStorage.getItem("project"))

    if (project_local) {

      setProject_state(project_local)
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
            <DeveloperModeIcon />
          </Avatar>
          Project Details
        </Typography>

        {project_state.map((value, index) => (
          <div key={index} style={{ marginBottom: 10 }}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                id="panel1a-header"
              >
                {value.project_name ? (
                  <Typography className="">{value.project_name}</Typography>
                ) : (
                  "App Name"
                )}
              </AccordionSummary>
                    <AccordionDetails>
                        
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      label="Project Name"
                      variant="outlined"
                      value={value.project_name}
                      name="project_name"
                      onChange={(e) => handle_ProjectState_Change(e, index)}
                      fullWidth
                    />
                  </Grid>

                  <Grid item xs={12} sm={12}>
                    <TextField
                      label="Project Description"
                      multiline
                      rows={4}
                      variant="outlined"
                      value={value.project_description}
                      name="project_description"
                      onChange={(e) => handle_ProjectState_Change(e, index)}
                      fullWidth
                     
                    />
                  </Grid>

                  <Grid item xs={12} sm={12}>
                    <TextField
                      label="Project Url"
                      variant="outlined"
                      value={value.project_url}
                      name="project_url"
                      onChange={(e) => handle_ProjectState_Change(e, index)}
                      fullWidth
               
                    />
                  </Grid>
               

                <Grid item xs={6} sm={6}>
                  <TextField
                    id="date"
                    label="Project Start date"
                    type="date"
                                    name="project_start_date"
                             
                    value={value.project_start_date}
                    onChange={(e) => handle_ProjectState_Change(e, index)}
                 
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>

                <Grid item xs={6} sm={6}>
                  <TextField
                    id="date"
                    label="Project Finish date"
                    type="date"
                                    name="project_finish_date"
                                    
                    value={value.project_finish_date}
                    onChange={(e) => handle_ProjectState_Change(e, index)}
                
                    InputLabelProps={{
                      shrink: true,
                    }}
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
              <Fab size="small"  aria-label="add" onClick={handleAddForm}>
          <AddIcon />
        </Fab>

        <Button
    
          variant="contained"
          color="secondary"
          onClick={addUserProject}
        >
          Save & Next
        </Button>
       
      </div>
    </Container>
  );
}

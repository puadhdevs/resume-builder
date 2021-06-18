import React, { useEffect, useState } from 'react'
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import DescriptionIcon from '@material-ui/icons/Description';
import { useStateValue } from '../store/StateProvider';

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
        justifyContent:"space-between",
        margin: "20px 0",
    },
}));

function Objective__Form({  nextStep, prevStep }) {

    const classes = useStyles();
    const [obj, setObj] = useState("")


    const [{ },dispatch] = useStateValue()
    const addUserObjective = () => {
        
        dispatch({
            type: "ADD_USER_OBJECTIVE",
            payload: obj,
            
        });
   
        // calling  the next fucntion
        nextStep()
    };

    useEffect(() => {
        const objective = JSON.parse(localStorage.getItem("objective"))

        if (objective) {

            setObj(objective)
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
                        <DescriptionIcon />
                    </Avatar>
                    Your Objective
                </Typography>


                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                autoComplete="true"
                                name="objective"
                                variant="outlined"
                                required
                                fullWidth
                               
                                value={obj}
                                onChange={(e) => setObj(e.target.value)}
                                id="objective"
                                label="Objective"
                                autoFocus
                                multiline
                                placeholder="Mention Your Objective ."
                            />
                        </Grid>
                    </Grid>

                    <div className={classes.btnFloat}>

                  
                    <Button
                            className={classes.btnFloat}
                        variant="contained"
                        color="primary"
                        onClick={prevStep}
                    >
                            Back
                    </Button>
                        
                        <Button
                            className={classes.btnFloat}
                            variant="contained"
                            color="secondary"
                            onClick={addUserObjective}
                        >
                            Save & Next
                         </Button>
                  
                    </div>
                </form>
            </div>
        </Container>
    )
}

export default Objective__Form

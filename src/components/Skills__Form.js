import { React, useEffect, useState } from "react"
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Grid from '@material-ui/core/Grid';
import Avatar from "@material-ui/core/Avatar";

import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionActions from '@material-ui/core/AccordionActions';
import CodeIcon from '@material-ui/icons/Code';
import Divider from '@material-ui/core/Divider';


import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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

export default function Skills__Form({  nextStep, prevStep }) {

    const classes = useStyles();
    const [skill_state, setSkill_state] = useState([
        {
            skill_name: "",
            skill_category: "",

        },
    ])

    const handle_skillState_Change = (e, index) => {

        const { name, value } = e.target;

        const values = [...skill_state]

        values[index][name] = value
        setSkill_state(values)

        
    }

    const handleAddForm = () => {
        setSkill_state([...skill_state,
        {
            skill_name: "",
            skill_category: "",
 
        }])

    }

    const handleRemoveForm = (index) => {
        const values = [...skill_state]
        values.splice(index, 1)
        setSkill_state(values)

        dispatch({
            type: "ADD_USER_SKILL",
            payload: values
        });
    }

    const [{ }, dispatch] = useStateValue()
    const addUserSkill = () => {
        // dispatch the item into data layer 
        dispatch({
            type: "ADD_USER_SKILL",
            payload: skill_state
        });
        // nextStep()
    };


 

    useEffect(() => {
        const skill_local = JSON.parse(localStorage.getItem("skill"))

        if (skill_local) {

            setSkill_state(skill_local)
        }
    }, [])

    return (
        <Container maxWidth="xs">

            <div className={classes.paper}>
                <Typography
                    className={classes.logo}
                    align="center"
                    component="h1"
                    variant="h5"
                    gutterBottom
                >
                    <Avatar className={classes.avatar}>
                        <CodeIcon />
                    </Avatar>
          Skills
        </Typography>
               
          

                {skill_state.map((value, index) => (

                    <div key={index} style={{ marginBottom: 10 }}>
                        <Accordion >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                id="panel1a-header"
                            >
                                {value.skill_category ?
                                    <Typography className="">{value.skill_category}</Typography> :
                                    "Category"
                                }

                            </AccordionSummary>
                            <AccordionDetails >
                                <Grid container spacing={2}>

                                    <Grid item xs={12} sm={12}>
                                        <FormControl variant="outlined" fullWidth className={""}>

                                            <Select
                                                native
                                                value={value.skill_category}
                                                onChange={e => handle_skillState_Change(e, index)}

                                                inputProps={{
                                                    name: 'skill_category',

                                                }}
                                            >
                                                <option aria-label="" value="" />
                                                <option value="Programming Languages">Programming Languages</option>
                                                <option value="Databases">Databases</option>
                                                <option value="Frameworks">Frameworks</option>
                                                <option value="Tools">Tools</option>
                                                <option value="Operating System">Operating System</option>

                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={12}>
                                        <TextField label="skill Name" variant="outlined" value={value.skill_name} name="skill_name" onChange={e => handle_skillState_Change(e, index)} fullWidth />
                                    </Grid>
                                </Grid>
                             
                            </AccordionDetails>

                            <Divider />
                            <AccordionActions>

                                <Button size="small" color="primary" onClick={e => handleRemoveForm(index)}>
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
                <Fab aria-label="add" size="small"  onClick={handleAddForm}>
                    <AddIcon />
                </Fab>
                <Button variant="contained" color="secondary" onClick={addUserSkill}>
                    save
                </Button>

                {/* <Button variant="contained" color="secondary" onClick={nextStep}>
                    Next
        </Button> */}
            </div>

        </Container>
    )
}
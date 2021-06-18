import React, { useEffect, useState } from 'react'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';


import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

// import Alert from '@material-ui/lab/Alert';

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
// ###########

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionActions from '@material-ui/core/AccordionActions';
import Alert from '@material-ui/lab/Alert';
import Divider from '@material-ui/core/Divider';


import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from '../store/StateProvider';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    alert: {
        margin: "10px 0",
        width:"100%",
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

function Educational__Form({  prevStep, nextStep }) {
    
    const classes = useStyles();

    const [{ }, dispatch] = useStateValue()
    
    const [educational_state, setEducational_state] = useState([
        {
        schoolCollege: "",
        marks_obtained: "",
        boardUniversity: "",
        year_of_completion: "",
        marks_type: "Percentage",
        educational_country: "",
            school_college_state: "",
        educational_city: "",
        standard: "",
        graduation_course: "",
        graduation_stream : ""
        
        },
    ])

    const addUserQualification = () => {

        dispatch({
            type: "ADD_USER_QUALIFICATION",
            payload: educational_state,

        });


        // calling next
        nextStep()
    };
    const educational_handleChange = (e, index) => {

        const { name, value } = e.target;
    

        const values = [...educational_state]  // [ {}, {}, {}, ...]
        
        values[index][name] = value
        setEducational_state(values)
        
    }

    const handleAddForm = () => {
        setEducational_state([...educational_state,
            {
                schoolCollege: "",
                marks_obtained: "",
                boardUniversity: "",
                year_of_completion: "",
                marks_type: "Percentage",
                educational_country: "",
                school_college_state: "",
                educational_city: "",
                standard: "",
                graduation_course: "",
                graduation_stream: ""
            }
        ])

    }

    const handleRemoveForm = (index) => {
        const values = [...educational_state]
        values.splice(index, 1)
      

        setEducational_state(values)
        // localStorage.setItem("educational", JSON.stringify(values))
        dispatch({
            type: "REMOVE_USER_QUALIFICATION",
        
             payload: values,
        })

        // localStorage.setItem("educational", JSON.stringify(state.educational))
    }


    useEffect(() => {
        const eductional_local = JSON.parse(localStorage.getItem("educational"))
     
        if (eductional_local) {

            setEducational_state(eductional_local)
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
                        <CastForEducationIcon />
                    </Avatar>
                     Educational Details
                </Typography>
                
                <Alert severity="info"  className={classes.alert}>Recently Qualification must be listed at top !</Alert>
      
                {educational_state?.map((value, index) => (

                    <div key={index} style={{ marginBottom: 10 }}>
                        <Accordion >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}>

                                    {value?.standard ?
                                        <Typography className="">{value.standard}</Typography> :
                                        "Add Qualification"
                                    }
                                </Typography>


                            </AccordionSummary>
                            <AccordionDetails>
                                <Grid container spacing={2}>

                                
                                <Grid item xs={12} sm={12}>
                                  
                                        <TextField label="School/College Name"  autoFocus variant="outlined" value={value.schoolCollege} name="schoolCollege" onChange={e => educational_handleChange(e, index)} fullWidth />
                                </Grid>

                                <Grid item xs={12} sm={12}>

                                        <TextField label="Board/University Name"  variant="outlined" value={value.boardUniversity} name="boardUniversity" onChange={e => educational_handleChange(e, index)} fullWidth  />
                                </Grid>

                         

                                <Grid item xs={6} sm={6}>
                                        <TextField label="Marks Obtained"   variant="outlined" value={value.marks_obtained} name="marks_obtained" onChange={e =>  educational_handleChange(e, index)} />
                                </Grid>

                                    <Grid item xs={6} sm={6}>

                                        <FormControl variant="outlined" fullWidth className={""}>

                                            <Select
                                                native
                                                value={value.marks_type}
                                                onChange={e => educational_handleChange(e, index)}

                                                inputProps={{
                                                    name: 'marks_type',

                                                }}
                                            >
                                                <option aria-label="" value="" />
                                                <option value="CGPA">CGPA</option>
                                                <option value="Percentage">Percentage</option>
                                            </Select>
                                        </FormControl>

                                        
                                    </Grid>

                                    <Grid item xs={6} sm={6}>
                                        <TextField label="year of completion"  variant="outlined" value={value.year_of_completion} name="year_of_completion" onChange={e => educational_handleChange(e, index)} />
                                    </Grid>

                                    <Grid item xs={6} sm={6}>
                                        <FormControl variant="outlined" fullWidth className={""}>

                                            <Select
                                                native
                                                value={value.standard}
                                                onChange={e => educational_handleChange(e, index)}

                                                inputProps={{
                                                    name: 'standard',

                                                }}
                                            >
                                                <option aria-label="" value="" />
                                                <option value="X">X</option>
                                                <option value="XII">XII</option>
                                                <option value="Graduation">Graduation</option>

                                            </Select>
                                        </FormControl>
                                    </Grid>

                                    {/*  #####################  */}
                                    {value.standard === "Graduation" && <>
                                        
                                        <Grid item xs={6} sm={6}>
                                            <TextField label="Course"   variant="outlined" value={value.graduation_course} name="graduation_course" onChange={e => educational_handleChange(e, index)} />
                                        </Grid>
                                    
                                        <Grid item xs={6} sm={6}>
                                            <TextField label="Stream"   variant="outlined" value={value.graduation_stream} name="graduation_stream" onChange={e => educational_handleChange(e, index)} fullWidth />
                                        </Grid>
                                    </>
                                    }

                                    <Grid item xs={4} sm={4}>
                                        <TextField label="Country"  variant="outlined" value={value.educational_country} name="educational_country" onChange={e => educational_handleChange(e, index)} />
                                    </Grid>

                                    <Grid item xs={4} sm={4}>
                                        <TextField label="State"  variant="outlined" value={value.school_college_state} name="school_college_state" onChange={e => educational_handleChange(e, index)} />
                                    </Grid>

                                    <Grid item xs={4} sm={4}>
                                        <TextField label="City"  variant="outlined" value={value.educational_city} name="educational_city" onChange={e => educational_handleChange(e, index)} />
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


                <Button
       
                    variant="contained"
                    color="primary"
                    onClick={prevStep}
                >
                    Back
                    </Button>
                <Fab size="small"  aria-label="add" onClick={handleAddForm}>               
                    <AddIcon />
                </Fab>

                <Button
                   
                    variant="contained"
                    color="secondary"
                    onClick={addUserQualification}
                >
                    Save & Next
          </Button>
              
            </div>
         </Container>   
        
      
    )
}

export default Educational__Form

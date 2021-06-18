import React ,{ useEffect, useRef, useState }  from 'react'
import Certificate from '../components/Certificate'
import Educational from '../components/Educational'
import Objective from '../components/Objective'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import UserInfo from '../components/UserInfo'
import Button from '@material-ui/core/Button';

import Grid from "@material-ui/core/Grid";
import ReactToPrint from 'react-to-print';

import './ResumeScreen.css'
import { useStateValue } from '../store/StateProvider'

function ResumeScreen() {
   

    const componentRef = useRef();
    const [educational, setEducational] = useState("")
    const [project, setProject] = useState("")
    const [certification, setCertification] = useState("")
    const [skills, setSkills] = useState("")

    // get values form  context api
    const [{ userInfo, objective }] = useStateValue();
   

    useEffect(() => {
        const educational = JSON.parse(localStorage.getItem('educational'))
        educational && setEducational(educational)

        const project = JSON.parse(localStorage.getItem('project'))
        project && setProject(project)

        const certification = JSON.parse(localStorage.getItem('certificate'))
        certification && setCertification(certification)

        const skills = JSON.parse(localStorage.getItem('skill'))
        skills && setSkills(skills)
    },[])
    return (
        
        <div className="resumeScreen_container">
            
            <ReactToPrint
                trigger={() => <Button variant="contained" className="btn-print float-right" color="secondary" >
                    Print Resume
                    </Button>}
                content={() => componentRef.current}
            />
            
            <Grid container spacing={1}>
                <Grid item xs={12} sm={12}>
                    <div className="resumeScreen" ref={componentRef}>
                        {userInfo && <UserInfo user={userInfo} />}
                        {objective && <Objective objective={objective} />}

                        {educational && <Educational educational={educational} />}
                        {certification && <Certificate certificate={certification} />}
                        {skills && <Skills skills={skills} />}
                        {project && <Projects project={project} />}


                    </div>
                    
                </Grid>
            </Grid>
          
             </div>
    )
}

export default ResumeScreen

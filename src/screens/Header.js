import React from 'react'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useHistory, } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
 
    appBar: {
        position: "relative",
    },
   
  
    btn: {
        position: "absolute",
        right: "10px",
      

    }
}));


   
function Header() {
    const classes = useStyles();
    const history = useHistory();
    return (
        <div>
            <AppBar position="absolute" color="default" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        <Link to="/">
                            Resume Builder
                        </Link>
                    </Typography>
                    {history.location.pathname !=="/resume" && 
                    <Button className={classes.btn} variant="outlined" color="secondary"  >  <Link to="/resume">  Show Resume     </Link></Button>
                    }
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header

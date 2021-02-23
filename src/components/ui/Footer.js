import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.common.main,
        width: "100%",
        zIndex: 1302,
        position: "relative",
        marginTop: "3em"
    },
    icon: {
        height: "4em",
        width: "4em",
        [theme.breakpoints.down("xs")]: {
            height: "2.5em",
            width: "2.5em"
        }
    }
}))

export default function Footer(){
    const classes = useStyles();

    return <footer className={classes.footer}>
        <Grid container justify="center" spacing={2}>
            <Grid item component={"a"} href="https://www.linkedin.com/in/ashley-eubank/" rel="noopener noreferrer" target="_blank">
                <img alt="linkedin logo" src={linkedin} className={classes.icon}/>
            </Grid>
            <Grid item component={"a"} href="https://github.com/eubank87" rel="noopener noreferrer" target="_blank">
                <img alt="github logo" src={github} className={classes.icon}/>
            </Grid>
        </Grid>
    </footer>
}
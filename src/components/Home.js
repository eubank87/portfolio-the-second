import React from "react";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles(theme=> ({
    mainContainer: {
        marginTop: "5em",
        [theme.breakpoints.down("md")]: {
            marginTop: "3em"
        },
        [theme.breakpoints.down("xs")]: {
            marginTop: "2em"
        }
    },
    heroTextContainer: {
        minWidth: "21.5em",
        marginLeft: "1em",
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0
        }
    }
}))

export default function HomePage(){
    const classes = useStyles();
    const theme = useTheme();

    return(
        <Grid container className={classes.mainContainer} direction="column">
            <Grid item>
            <Grid container 
                justify="flex-end" 
                alignItems="center" 
                direction="row">
                    <Grid sm
                    className={classes.heroTextContainer} 
                    item>
                        <Typography align="center" 
                        variant="h1" style={{marginBottom: "1em"}}>
                            Ashley Eubank
                        </Typography>
                        <Typography align="center" style={{fontSize: "2rem"}}>
                            Full Stack Web Developer
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
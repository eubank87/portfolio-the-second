import React from "react";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import {Link} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

import flowers from "../assets/flower_background.jpg";

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
                justify="center" 
                alignItems="center" 
                direction="row">
                    <Grid sm
                    className={classes.heroTextContainer} 
                    item>
                        <Typography align="center" 
                        variant="h2">
                            Portfolio
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
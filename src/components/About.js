import React from "react";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import {Link} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import bioPic from "../assets/ashley.jpg";

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
    },
    aboutText: {
        textAlign: "center",
        paddingRight: "10em",
        paddingLeft: "10em",
        [theme.breakpoints.down("md")]: {
            paddingRight: "5em",
            paddingLeft: "5em"
        },
        [theme.breakpoints.down("sm")]: {
            paddingRight: "1em",
            paddingLeft: "1em"
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
                    direction="column">
                    <Grid sm
                        className={classes.heroTextContainer} 
                        item>
                        <Typography align="center" 
                        variant="h2">
                            About Me
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container
                direction="row"
                    justify="center" 
                    alignItems="center">
                        <Grid item style={{marginLeft: "4em"}}>
                        <img style={{height: "20em"}} src={bioPic}/>
                        </Grid>
                    <Grid item className={classes.aboutText} md>
                        <Typography paragraph>
                        Full stack web developer with a certificate from the University of Washington, eager to find a career where creativity and people skills can thrive.
                        </Typography>
                        <Typography paragraph>
                        Currently proficient in HTML, CSS, Javascript, Node, Sequelize, Mongoose and React. Most recently led the back end development on a project that helps curate recipes based on stored user data. Finds joy in using meticulousness to debug code and solve edge cases.
                        </Typography>
                        <Typography paragraph>
                        Known for relating past experiences to new fields and is guaranteed to become a successful front end developer or engineer, who can help meet client needs and maintain relationships to grow business.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
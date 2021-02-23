import React from "react";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles(theme=> ({
    mainContainer: {
        height: "600px",
        marginTop: "5em",
        [theme.breakpoints.down("md")]: {
            marginTop: "3em"
        },
        [theme.breakpoints.down("xs")]: {
            marginTop: "2em"
        }
    },
    heroTextContainer: {
        marginBottom: "3em",
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
                        variant="h1">
                            Contact
                        </Typography>
                    </Grid>
                </Grid>
                <Grid justify="center" container>
                    <Grid item>
                        <Card style={{backgroundColor: theme.palette.common.main}}>
                            <CardContent>
                                <Typography>Email: eubank.ashley@gmail.com</Typography>
                                <br></br>
                                <Typography>Phone: (480) 231-7775</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
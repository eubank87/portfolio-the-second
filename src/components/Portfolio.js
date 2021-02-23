import React from "react";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import {Link} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import budget from "../assets/Budget_Ballin.gif";
import fridge from "../assets/CheckYourFridge.gif";
import employee from "../assets/EmployeeFinder.gif";
import burger from "../assets/ExpressBurgers.gif";
import notes from "../assets/NoteTaker.gif";
import generator from "../assets/Team_Generator.gif";

const useStyles = makeStyles(theme=> ({
    mainContainer: {
        paddingLeft: "2em",
        paddingRight: "2em",
        marginTop: "5em",
        [theme.breakpoints.down("md")]: {
            marginTop: "3em"
        },
        [theme.breakpoints.down("xs")]: {
            marginTop: "2em",
            paddingLeft: 0,
            paddingRight: 0,
        }
    },
    heroTextContainer: {
        minWidth: "21.5em",
        marginLeft: "1em",
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0
        }
    },
    cardImg: {
        height: "20em",
        width: "100%"
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

                <Grid container
                    justify="center" 
                    spacing={4}
                    alignItems="center" 
                    direction="row">
                    <Grid item md={4}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia className={classes.media}>
                                    <img src={budget} className={classes.cardImg} alt="budget tracking app"/>
                                </CardMedia>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Budget Tracker
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        An app that allows users to track personal finances. Can be downloaded to a personal device as PWA to store data even when offline. 
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                 Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                  
                    <Grid item md={4}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia className={classes.media}>
                                    <img src={fridge} className={classes.cardImg} alt="recipe app"/>
                                </CardMedia>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Check Your Fridge
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        An app that allows users to create personal profiles, save food ingredients to a database and use stored ingredients to search for recipes. 
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                 Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>

                <Grid container
                    justify="center" 
                    spacing={4}
                    alignItems="center" 
                    direction="row">
                    <Grid item md={4}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia className={classes.media}>
                                    <img src={employee} className={classes.cardImg} alt="employee directory app"/>
                                </CardMedia>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Employee Directory
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        An app that allows users to view and search a list of employees. 
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                 Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                  
                    <Grid item md={4}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia className={classes.media}>
                                    <img src={burger} className={classes.cardImg} alt="burger maker app"/>
                                </CardMedia>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Express Burgers
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        An app that allows users to create burger names and move them from on the menu to sold out. 
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                 Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>

                <Grid container
                    justify="center" 
                    spacing={4}
                    alignItems="center" 
                    direction="row">
                    <Grid item md={4}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia className={classes.media}>
                                    <img src={notes} className={classes.cardImg} alt="Note taking app"/>
                                </CardMedia>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Note Taker
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        An app that allows users to make notes, save them, update and delete when needed.  
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                 Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                  
                    <Grid item md={4}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia className={classes.media}>
                                    <img src={generator} className={classes.cardImg} alt="team generator app"/>
                                </CardMedia>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Team Generator
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        An app that allows users to add employees to a directory and outputs an html file with results, color-coded by position.  
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                 Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
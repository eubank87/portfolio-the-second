import React, {useState, useEffect} from "react";
import Appbar from "@material-ui/core/Appbar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import {makeStyles} from "@material-ui/styles";
import { useTheme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import daisy from "../../assets/daisy.svg";

function ElevationScroll(props) {
    const { children, window } = props;

    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
}
  

const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "4em",
        [theme.breakpoints.down("md")]: {
            marginBottom: "2em"
        },
        [theme.breakpoints.down("xs")]: {
            marginBottom: "1.25em"
        }
    },
    logo: {
        height: "7em",
        [theme.breakpoints.down("md")]: {
            height: "6em"
        },
        [theme.breakpoints.down("xs")]: {
            height: "5em"
        }
    },
    logoContainer: {
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    tabContainer: {
        marginLeft: "auto"
    },
    tab: {
        ...theme.typography.tab,
        color: "black"
    }
}))

export default function Header(){
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"))

    const [value, setValue] =useState(0);

    const handleChange = (event, value) => {
        setValue(value)
    }


    useEffect(()=> {
        if(window.location.pathname === "/" && value !== 0){
            setValue(0)
        } else if(window.location.pathname === "/about" && value !== 1){
            setValue(1)
        } else if(window.location.pathname === "/portfolio" && value !== 2){
            setValue(2)
        } else if(window.location.pathname === "/contact" && value !== 3){
            setValue(3)
        }
    }, [value])

    const tabs = (
        <React.Fragment>
            <Tabs onChange={handleChange} className={classes.tabContainer}>
                <Tab component={Link} to="/" value={value} className={classes.tab} label="Home"/>
                <Tab component={Link} to="/about" value={value} className={classes.tab} label="About"/>
                <Tab component={Link} to="/portfolio" value={value}  className={classes.tab} label="Portfolio"/>
                <Tab component={Link} to="/contact" value={value}  className={classes.tab} label="Contact"/>
            </Tabs>
        </React.Fragment>
    )

    return (
        <React.Fragment>
            <ElevationScroll>
                <Appbar position="fixed">
                    <Toolbar disableGutters>
                        <Button className={classes.logoContainer} disableRipple onClick={()=> setValue(0)} component={Link} to="/" value={value}>
                        <img src={daisy} className={classes.logo}/>
                        </Button>
                        {matches ? null : tabs}
                    </Toolbar>
                </Appbar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </React.Fragment>
    )
}
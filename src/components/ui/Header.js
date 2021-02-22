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
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

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
    },
    drawerIconContainer: {
        marginLeft: "auto",
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    drawericon: {
        height: "50px",
        width: "50px"
    },
    drawer: {
        backgroundColor: theme.palette.common.main
    },
    drawerItem: {
        ...theme.typography.tab,
        color: "black",
        opacity: 0.7
    },
    appbar: {
        zIndex: theme.zIndex.modal + 1
    }
}))

export default function Header(){
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

    const [value, setValue] =useState(0);
    const [openDrawer, setOpenDrawer] = useState(false);

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
            <Tabs value={value} indicatorColor="primary" onChange={handleChange} className={classes.tabContainer}>
                <Tab component={Link} to="/" className={classes.tab} label="Home"/>
                <Tab component={Link} to="/about" className={classes.tab} label="About"/>
                <Tab component={Link} to="/portfolio" className={classes.tab} label="Portfolio"/>
                <Tab component={Link} to="/contact" className={classes.tab} label="Contact"/>
            </Tabs>
        </React.Fragment>
    )

    const drawer = (
        <React.Fragment>
            <SwipeableDrawer classes={{paper: classes.drawer}} open={openDrawer} onClose={()=> setOpenDrawer(false)} onOpen={()=> setOpenDrawer(true)}>
            <div className={classes.toolbarMargin}/>
                <List disablePadding>
                    <ListItem selected={value === 0} onClick={()=> {setOpenDrawer(false); setValue(0)}} divider button component={Link} to="/" disableTypography>
                        <ListItemText className={classes.drawerItem}>Home</ListItemText>
                    </ListItem>
                    <ListItem selected={value === 1} onClick={()=> {setOpenDrawer(false); setValue(1)}} divider button component={Link} to="/about" disableTypography>
                        <ListItemText>About</ListItemText>
                    </ListItem>
                    <ListItem selected={value === 2} onClick={()=> {setOpenDrawer(false); setValue(2)}} divider button component={Link} to="/portfolio" disableTypography>
                        <ListItemText>Portfolio</ListItemText>
                    </ListItem>
                    <ListItem selected={value === 3} onClick={()=> {setOpenDrawer(false); setValue(3)}} divider button component={Link} to="/contact" disableTypography>
                        <ListItemText>Contact</ListItemText>
                    </ListItem>
                </List>
            </SwipeableDrawer>
            <IconButton onClick={()=> setOpenDrawer(!openDrawer)} className={classes.drawerIconContainer}>
                <MenuIcon className={classes.drawericon}/>
            </IconButton>
        </React.Fragment>
    )

    return (
        <React.Fragment>
            <ElevationScroll>
                <Appbar className={classes.appbar} position="fixed">
                    <Toolbar disableGutters>
                        <Button className={classes.logoContainer} disableRipple onClick={()=> setValue(0)} component={Link} to="/" value={value}>
                        <img src={daisy} className={classes.logo}/>
                        </Button>
                        {matches ? drawer : tabs}
                    </Toolbar>
                </Appbar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </React.Fragment>
    )
}
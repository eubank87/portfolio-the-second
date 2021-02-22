import React from "react";
import Appbar from "@material-ui/core/Appbar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import {makeStyles} from "@material-ui/styles";
import { useTheme } from "@material-ui/core/styles";

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
    
}))

export default function Header(){
    const classes = useStyles();
    const theme = useTheme();

    return (
        <React.Fragment>
            <ElevationScroll>
                <Appbar>
                    <Toolbar>
                        <Typography>Ashley Eubank</Typography>
                    </Toolbar>
                </Appbar>
            </ElevationScroll>
        </React.Fragment>
    )
}
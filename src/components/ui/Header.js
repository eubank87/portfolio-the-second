import React from "react";
import Appbar from "@material-ui/core/Appbar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import {makeStyles} from "@material-ui/styles";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    
}))

export default function Header(){
    const classes = useStyles();
    const theme = useTheme();

    return (
        <React.Fragment>
            <Appbar>
                <Toolbar>
                    <Typography>Ashley Eubank</Typography>
                </Toolbar>
            </Appbar>
        </React.Fragment>
    )
}
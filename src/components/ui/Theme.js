import {createMuiTheme} from "@material-ui/core/styles";

const mainColor = "#dad"
const secondColor = "cornflowerblue"
const textColor = "grey"

export default createMuiTheme({
    palette: {
        common: {
            main: mainColor,
            second: secondColor
        },
        primary: {
            main: mainColor
        },
        seconday: {
            main: secondColor
        }
    },
    typography: {
        h1: {
            fontFamily: "Pacifico",
            fontSize: "2.5rem"
        },
        text: {
            color: textColor,
            fontSize: "1.25rem"
        }
    }
})
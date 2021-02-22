import React, {useState} from "react";
import { ThemeProvider } from '@material-ui/styles';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Header from "./ui/Header";
import theme from "./ui/Theme";
import Home from "./Home"

function App() {
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header value={value} 
        setValue={setValue}/>
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} setValue={setValue}/>} />
          <Route exact path="/about" component={()=> <div>About</div>}/>
          <Route exact path="/portfolio" component={()=> <div>Portfolio</div>}/>
          <Route exact path="/contact" component={()=> <div>Contact</div>}/>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

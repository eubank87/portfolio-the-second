import React, {useState} from "react";
import { ThemeProvider } from '@material-ui/styles';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Header from "./ui/Header";
import theme from "./ui/Theme";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

function App() {
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header value={value} 
        setValue={setValue}/>
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} setValue={setValue}/>} />
          <Route exact path="/about" render={(props) => <About {...props} setValue={setValue}/>}/>
          <Route exact path="/portfolio" render={(props) => <Portfolio {...props} setValue={setValue}/>}/>
          <Route exact path="/contact" render={(props) => <Contact {...props} setValue={setValue}/>}/>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

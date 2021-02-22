import React from "react";
import { ThemeProvider } from '@material-ui/styles';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Header from "./ui/Header";
import theme from "./ui/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header/>
        <h1>Portfolio The Second</h1>
        <Switch>
          <Route exact path="/" component={()=> <div>Home</div>}/>
          <Route exact path="/about" component={()=> <div>About</div>}/>
          <Route exact path="/portfolio" component={()=> <div>Portfolio</div>}/>
          <Route exact path="/contact" component={()=> <div>Contact</div>}/>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

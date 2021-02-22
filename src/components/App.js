import React from "react";
import { ThemeProvider } from '@material-ui/styles';

import Header from "./ui/Header";
import theme from "./ui/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header/>
        <h1>Portfolio The Second</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;

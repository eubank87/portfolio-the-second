import React from "react";
import { ThemeProvider } from '@material-ui/styles';

import Header from "./ui/Header";
import theme from "./ui/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <h1>Portfolio The Second</h1>
    </ThemeProvider>
  );
}

export default App;
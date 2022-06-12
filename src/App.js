import './App.css';
import Main from '../src/Components/Main/Main';
import { ThemeProvider } from "@mui/system";
import theme from "./theme";
import React, { useState, useEffect } from 'react';
import Loader from '../src/Components/Loading/Loading.js';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (

    <ThemeProvider theme={theme}>
        {loading === true ? (
          <Loader />
        ) : (
          <Main />
        )
        }
    </ThemeProvider >

  );
}

export default App;

import React from 'react';

import './App.css';
import { Provider } from 'react-redux';
import { AppBar, Toolbar, Typography, createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { store } from './Store';


import InfoComponent from './components/info-component/InfoComponent';

const theme = createMuiTheme({

  palette: {
      
      primary: {
          main: '#4e5157'},
      secondary: {
          main: '#c75504'}
    }
  });

function App(){
  return (
    <MuiThemeProvider theme = {theme}>
      <div className = "App">
        <Provider store = {store}>
          <Router>
            <AppBar color = "primary" position = "static">
              <Toolbar>
                <Typography variant = "h5" color = "inherit">
                  
                </Typography>
              </Toolbar>
            </AppBar>
            <Switch>
              <Route path = '/info' render = {() => <InfoComponent />} />
            </Switch>
          </Router>
        </Provider>
      </div>
    </MuiThemeProvider>
  )
}

export default App;
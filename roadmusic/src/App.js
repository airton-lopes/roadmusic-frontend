import React from 'react';
import './App.css';

import {Switch, Route, BrowserRouter} from 'react-router-dom';
import { CssBaseline } from "@material-ui/core";

import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import HomePage from './components/HomePage';


function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route exact path="/signup">
          <SignUpPage />
        </Route>
        <Route exact path="/home">
          <HomePage />
        </Route>
        <Route path="/">
          <div>Opa! 404!</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

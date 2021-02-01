import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Switch>
         <Route exact path="/" component={Home} />
      </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;

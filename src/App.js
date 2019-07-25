import React from 'react';
import './App.css';
import { BrowserRouter, Route,Switch, Link } from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css';
import Dashboard from './containers/Dashboard'

function App() {
  return (
    <BrowserRouter>
          <Switch>
              <Route exact path="/" component={Dashboard}/>
          </Switch>
      </BrowserRouter>
  );
}

export default App;

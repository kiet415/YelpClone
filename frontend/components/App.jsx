import React from "react";
import GreetingContainer from './greeting_container'
import { Route, Redirect, Switch, Link , HashRouter } from 'react-router-dom';
import LogInContainer from './login_container.js'
import SignUpContainer from './signup_container.js'
const App = () => (
  <div>
    <h1>Kelp</h1>
    <GreetingContainer/>
    <Route path="/login" component={LogInContainer}/>
    <Route path="/signup" component={SignUpContainer}/>
  </div>
);

export default App;
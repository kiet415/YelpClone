import React from "react";
import GreetingContainer from './greeting_container'
import { Route, Redirect, Switch, Link , HashRouter } from 'react-router-dom';
import LogInContainer from './login_container.js'
import SignUpContainer from './signup_container.js'
import {AuthRoute, ProtectedRoute} from '../util/route_util.jsx'

const App = () => (
  <div>
    <img src="../../app/assets/images/yelp.png" alt="icon"></img>
    <GreetingContainer/>
    <Switch>
      <AuthRoute exact path="/login" component={LogInContainer}/>
      <AuthRoute exact path="/signup" component={SignUpContainer}/>
    </Switch>
    
  </div>
);

export default App;
import React from "react";
import GreetingContainer from './greeting_container'
import { Route, Redirect, Switch, Link , HashRouter } from 'react-router-dom';
import LogInContainer from './login_container.js'
import SignUpContainer from './signup_container.js'
import {AuthRoute, ProtectedRoute} from '../util/route_util.jsx'
// import kelpIcon from '../../app/assets/images/yelp.png'
const App = () => (
  <div>
    Icon here
    {/* <img src={kelpIcon} alt="icon"></img> */}
    <GreetingContainer/>
    <Switch>
      <AuthRoute exact path="/login" component={LogInContainer}/>
      <AuthRoute exact path="/signup" component={SignUpContainer}/>
    </Switch>
    
  </div>
);

export default App;
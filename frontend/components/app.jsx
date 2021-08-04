import React from "react";
import GreetingContainer from './greeting/greeting_container'
import { Route, Redirect, Switch, Link , HashRouter } from 'react-router-dom';
import LogInContainer from './session/login_container.js'
import SignUpContainer from './session/signup_container.js'
import {AuthRoute, ProtectedRoute} from '../util/route_util.jsx'
import BusinessContainer from './business/business_index_container.js'
import BusinessShowContainer from './business/business_show_container.js'
// import kelpIcon from '../../app/assets/images/yelp.jpg'
const App = () => (
  <div>
    <Route exact path="/" component={GreetingContainer}/>
    <Switch>
      <AuthRoute exact path="/login" component={LogInContainer}/>
      <AuthRoute exact path="/signup" component={SignUpContainer}/>
      <AuthRoute exact path="/business" component={BusinessContainer} />
      <AuthRoute exact path="/business/:id" component={BusinessShowContainer} />
    </Switch>
    
  </div>
);

export default App;
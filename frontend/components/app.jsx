import React from "react";
import GreetingContainer from './greeting/greeting_container'
import { Route, Redirect, Switch, Link , HashRouter } from 'react-router-dom';
import LogInContainer from './session/login_container.js'
import SignUpContainer from './session/signup_container.js'
import {AuthRoute, ProtectedRoute} from '../util/route_util.jsx'
import BusinessContainer from './business/business_index_container.js'
// import kelpIcon from '../../app/assets/images/yelp.jpg'
const App = () => (
  <div>

    {/* <img src={kelpIcon} alt="icon"></img> */}
    
    <Switch>
      <AuthRoute exact path ="/" component={GreetingContainer}/>
      <AuthRoute exact path="/login" component={LogInContainer}/>
      <AuthRoute exact path="/signup" component={SignUpContainer}/>
      <AuthRoute exact path ="/business/:id" component={BusinessContainer} />
    </Switch>
    
  </div>
);

export default App;
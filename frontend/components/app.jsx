import React from "react";
import GreetingContainer from './greeting/greeting_container'
import { Route, Redirect, Switch, Link , HashRouter } from 'react-router-dom';
import LogInContainer from './session/login_container.js'
import SignUpContainer from './session/signup_container.js'
import {AuthRoute, ProtectedRoute} from '../util/route_util.jsx'
import BusinessContainer from './business/business_index_container.js'
import BusinessItemContainer from './business/business_index_item_container.js'
// import kelpIcon from '../../app/assets/images/yelp.jpg'
const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={GreetingContainer}/>
      <Route exact path="/login" component={LogInContainer}/>
      <Route exact path="/signup" component={SignUpContainer}/>
      <Route exact path="/business" component={BusinessContainer} />
      <Route exact path="/business/:id" component={BusinessItemContainer} />
    </Switch>
    
  </div>
);

export default App;
import React from "react";
import GreetingContainer from './greeting/greeting_container'
import { Route, Redirect, Switch, Link , HashRouter } from 'react-router-dom';
import LogInContainer from './session/login_container.js'
import SignUpContainer from './session/signup_container.js'
import {AuthRoute, ProtectedRoute} from '../util/route_util.jsx'
import BusinessShowContainer from './business/business_show_container.js'
import Footer from './greeting/footer'
import HomePageContainer from "./greeting/home_page_container";
import SearchContainer from "./search/search_container"
import ReviewContainer from "./review/review_form_container"
import PhotosFormContainer from "./photos/photos_form_container"
import AllPhotosContainer from "./photos/all_photos_container"
// import kelpIcon from '../../app/assets/images/yelp.jpg'
const App = () => (
  <div>
    <Route exact path="/" component={HomePageContainer}/>
    <Switch>
      <AuthRoute exact path="/login" component={LogInContainer}/>
      <AuthRoute exact path="/signup" component={SignUpContainer}/>
      <Route exact path="/business" component={SearchContainer} />
      <Route exact path="/business/:id" component={BusinessShowContainer} />
      <Route exact path="/business/:id/new-review" component={ReviewContainer} />
      <Route exact path="/business/:id/new-photo" component={PhotosFormContainer} />
      <Route exact path="/business/:id/all-photos" component={AllPhotosContainer} />
    </Switch>
    <Footer/>
  </div>
);

export default App;
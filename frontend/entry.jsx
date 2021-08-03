import React from "react";
import ReactDOM from "react-dom";
import { signup, login, logout } from './util/session_api_util'
import configureStore from './store/store'
import Root from './components/root'
import {fetchBusinesses, fetchBusiness, createReview} from './util/business_api_util'
document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.signup = signup
  window.login = login
  window.logout = logout
  window.getState = store.getState;
  window.dispatch = store.dispatch; 
  window.fetchBusinesses = fetchBusinesses;

  ReactDOM.render(<Root store={store}/>, root);
});

//dispatch(fetchBusinesses()).then(console.log);
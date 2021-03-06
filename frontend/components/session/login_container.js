import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, clearSessionErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Log In',
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    demoLogIn: (user) => dispatch(login(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors()),

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);

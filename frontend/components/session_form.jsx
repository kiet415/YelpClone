import React from 'react';
//import { withRouter } from "react-router";


class SessionForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      };
      
    }
  
    handleSubmit = (e) =>  {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
        //this.props.history.push("/")
    }
    update(field) {
      return e => this.setState({
        [field]: e.currentTarget.value
      });
    }
    renderErrors() {
      return(
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    }
    render() {
        return(
            <div>
              <h1>{this.props.formType} </h1>
              {this.renderErrors()}
              <form className="session-form" onSubmit={this.handleSubmit}>
              {this.props.formType === 'Log In' ? 
              <div>
                <label> Email
                <input
                  type="text"
                    value={this.props.email}
                    onChange={this.update('email')}
                  />
                </label>
                <label> Password
                <input
                  type="password"
                  value={this.props.password}
                  onChange={this.update('firstName')}
                  />
                </label>
              </div>
              :
              <div>
                <label> First Name
                <input
                  type="text" 
                  value={this.props.firstName}
                  onChange={this.update('firstName')}
                  />
                </label>
                <label> Last Name
                <input
                  type="text"
                  value={this.props.lastName}
                  onChange={this.update('lastName')}
                  />
                </label>
                <label> Email
                <input
                  type="text"
                  value={this.props.email}
                  onChange={this.update('email')}
                  />
                </label>
                <label> Password
                <input
                  type="password"
                  value={this.props.password}
                  onChange={this.update('password')}
                  />
                </label>
                
              </div>
              }
              <button type="submit">{this.props.formType} </button>
              </form>
            </div>
        )
    }
}

export default SessionForm;

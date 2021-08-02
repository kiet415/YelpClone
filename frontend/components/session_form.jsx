import React from 'react';

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
              {this.props.formType === 'Login' ? 
              <div>
                <label> Email
                <input
                    value={this.props.email}
                    onChange={this.update('email')}
                  />
                </label>
                <label> Password
                <input
                    value={this.props.password}
                    onChange={this.update('firstName')}
                  />
                </label>
              </div>
              :
              <div>
                <label> First Name
                <input
                    value={this.props.firstName}
                    onChange={this.update('firstName')}
                  />
                </label>
                <label> Last Name
                <input
                    value={this.props.lastName}
                    onChange={this.update('lastName')}
                  />
                </label>
                <label> Email
                <input
                    value={this.props.email}
                    onChange={this.update('email')}
                  />
                </label>
                <label> Password
                <input
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
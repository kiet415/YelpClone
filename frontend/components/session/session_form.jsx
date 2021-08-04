import React from 'react';
//import { withRouter } from "react-router";
// import kelpIcon from '../../../app/assets/images/yelp.png'


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
              {/* <img src={kelpIcon} alt="icon"></img> */}
              <header className='session-header'>KELP</header>
              <div className="session-dual-div">
                <div className="session-box">
                  <h1>{this.props.formType} </h1>
                  {this.renderErrors()}
                  <form className="session-form" onSubmit={this.handleSubmit}>
                  {this.props.formType === 'Log In' ? 
                  <div>
                    <ul>
                      
                      <input
                          className="session-rest"
                          type="text"
                          value={this.props.email}
                          placeholder="Email"
                          onChange={this.update('email')}
                        />
                      
                      
                      <input
                        className="session-rest"
                        type="password"
                        value={this.props.password}
                        placeholder="Password"
                        onChange={this.update('password')}
                        />
                      <button type="submit">{this.props.formType} </button>
                    </ul>
                  </div>
                  :
                    <ul>
                      
                      <input
                        className="session-name"
                        type="text" 
                        value={this.props.firstName}
                        placeholder="First Name"
                        onChange={this.update('firstName')}
                        />
                      
                      
                      <input
                        className="session-name"
                        id="lastname"
                        type="text"
                        value={this.props.lastName}
                        placeholder="Last Name"
                        onChange={this.update('lastName')}
                        />
                      
                      
                      <input
                        className="session-rest"
                        type="text"
                        value={this.props.email}
                        placeholder="Email"
                        onChange={this.update('email')}
                        />
                      
                      
                      <input
                        className="session-rest"
                        type="password"
                        value={this.props.password}
                        placeholder="Password"
                        onChange={this.update('password')}
                        />
                      <button type="submit">{this.props.formType} </button>
                    </ul>
                  }
                  
                  </form>
                  
                </div>
                
                <div className="session-pic">
                  <img src="https://s3-media0.fl.yelpcdn.com/assets/2/www/img/7922e77f338d/signup/signup_illustration.png"/>
                </div>
                
              </div>
            </div>
        )
    }
}

export default SessionForm;

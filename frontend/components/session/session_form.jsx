import React from 'react';
//import { withRouter } from "react-router";
// import kelpIcon from '../../../app/assets/images/yelp.png'
import { Link } from 'react-router-dom';

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
    componentDidMount() {
      this.props.clearSessionErrors();
    }
    componentWillUnmount() {
      this.props.clearSessionErrors();
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
    demoLogIn = (e) => {
      e.preventDefault();
      let demo = {
        email: "DemoUser",
        password: "demouser"
      }
      this.props.demoLogIn(demo);
    }
    render() {

        return(
            <div>
              {/* <img src={kelpIcon} alt="icon"></img> */}
              <header className='session-header'>
                <img src="https://kelp-icon.s3.us-west-1.amazonaws.com/yelp.png"></img>
              </header>
              <div className="session-dual-div">
                <div className="session-box">
                  <h1 className="session-formType">{this.props.formType} to Yelp </h1>
                  
                  <form className="session-form" onSubmit={this.handleSubmit}>
                  {this.props.formType === 'Log In' ? 
                  <div className="session-logIn">
                    <h3>New to Yelp? <Link to='/signup'>Sign up</Link></h3>
                    {/* <div className='session-description'>By logging in, you agree to Yelp's
                      <a href="https://terms.yelp.com/tos/en_us/20200101_en_us/"> Terms of Service </a> 
                      and acknowledge Yelp's <a href="https://terms.yelp.com/privacy/en_us/20200101_en_us/">Privary Policy.</a>
                    </div> */}
                    {this.renderErrors()}
                    <ul>
                      <input
                        className="session-rest"
                        type="email"
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
                      <button onClick={this.demoLogIn}className="demo-logIn" type="submit" >Demo Log In</button>

                    </ul>
                  </div>
                  :
                  <div className="session-signUp">
                    <h3>Connect with great local businesses</h3>
                    {/* <div className='session-description'>By continuing, you agree to Yelp's
                      <a href="https://terms.yelp.com/tos/en_us/20200101_en_us/"> Terms of Service </a> 
                      and acknowledge Yelp's <a href="https://terms.yelp.com/privacy/en_us/20200101_en_us/">Privary Policy.</a>
                    </div> */}
                    {this.renderErrors()}
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
                          type="email"
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
                        <h5>Already on Yelp? <Link to='/login'>Log in</Link></h5>
                      </ul>
                    </div>
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
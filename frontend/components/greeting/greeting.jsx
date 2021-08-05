import React from 'react';
import { Link } from 'react-router-dom';


class Greeting extends React.Component {
    constructor(props) {
        super(props)
    }

    loggedIn = () => {
        return (
            <div className="logged-in-header">
                <h1>Welcome {this.props.currentUser.firstName} {this.props.currentUser.lastName}</h1>
                <button className="logout-btn" onClick={this.props.logout}>Log Out</button>
            </div>
        )
    }

    loggedOut = () => {
        return (
            <div className="logged-out-header">
                <button className="login-btn">
                    <Link to="/login">Log In</Link>
                </button>
                
                &nbsp; &nbsp;
                <button className="signup-btn">
                    <Link to="/signup">Sign Up</Link>
                </button>
                
            </div>
        )   
    }

    render() {
        return(
            <div>
                {this.props.currentUser ? this.loggedIn() : this.loggedOut() }
            </div>
        )
    }
}

export default Greeting;
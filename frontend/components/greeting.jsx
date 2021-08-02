import React from 'react';
import { Link } from 'react-router-dom';


class Greeting extends React.Component {
    constructor(props) {
        super(props)
    }

    loggedIn = () => {
        return (
            <div className="logged-in-header">
                <h1>Welcome {this.props.currentUser.name}</h1>
                <button className="logout-btn" onClick={this.props.logout}>Log Out</button>
            </div>
        )
    }

    loggedOut = () => {
        return (
            <div className="logged-out-header">
                <button className="login-btn">Log In</button>
                <button className="signup-btn">Sign Up</button>
            </div>
        )   
    }

    render() {
        return(
            <div>
                {this.props.currentUser ? this.loggedIn() : this.loggedOut() }
                aAAAAAAAAAA
            </div>
        )
    }
}

export default Greeting;
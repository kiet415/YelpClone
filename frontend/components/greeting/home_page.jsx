import React from "react";
import GreetingContainer from '../greeting/greeting_container'
import { Link } from "react-router-dom";
class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="homePage">

                <div className="home-main">
                    <div className="home-container">   
                        <header>
                            <nav className="navLinks">
                                <div className="navStart">
                                    <a href="https://github.com/kiet415">Github</a>
                                    <a href="https://www.linkedin.com/in/kietnguyen7/">LinkedIn</a>
                                </div>
                                <div className="navEnd">
                                    <Link to="/login">Log In</Link>
                                    <Link className="home-signUp"to="/signup">Sign Up</Link>
                                </div>
                                
                            </nav>
                            
                        </header>
                        
                        <div className="home-img">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Yelp_Logo.svg"></img>
                        </div>
                        
                        

                    </div>

                   
                    
                    
                </div>
                
            </div>
        )
    }
}

export default HomePage;
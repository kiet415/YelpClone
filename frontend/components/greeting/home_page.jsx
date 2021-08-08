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
                            <Link to="/"><img src="https://kelp-icon.s3.us-west-1.amazonaws.com/kelptransparent.png"></img></Link>
                        </div>

                        <div className="home-search">
                            <span className="spanA">Find</span><input className="home-category" type="text" placeholder="tacos, cheap dinner, Max's"></input>
                            <span className="spanB">Near</span><input type="text" placeholder="San Francisco"></input>
                            
                            <img className="home-search" src="https://blog.yelp.com/wp-content/uploads/2019/05/SearchIcon.png"/>
                            
                        </div>
                        

                    </div>

                   
                    
                    
                </div>
                
            </div>
        )
    }
}

export default HomePage;
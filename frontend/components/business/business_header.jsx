import React from "react";
import GreetingContainer from '../greeting/greeting_container'
import { Link } from "react-router-dom";
const Header = () => (
    
        <header className="header">
            
            <Link className="header-icon" to='/'><img src="https://kelp-icon.s3.us-west-1.amazonaws.com/whiteyelpicon.jpg"></img></Link>
        
            <input className="place-search" type="text" placeholder="tacos, cheap dinner, Max's"></input>
            <input type="text" placeholder="San Francisco"></input>
            <img className="search" src="https://blog.yelp.com/wp-content/uploads/2019/05/SearchIcon.png"/>
         
            <a href="https://www.yelp.com/advertise/consumer_header_redirect">For Businesses</a>
            <a href="https://www.yelp.com/writeareview">Write a Review</a>

            <GreetingContainer/>
        </header>
    
)

export default Header;

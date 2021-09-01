import React from "react";
import GreetingContainer from '../greeting/greeting_container'
import { Link } from "react-router-dom";


class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    goToGithub = (e) => {
        e.preventDefault();
        window.open('https://github.com/kiet415', "_blank")
    }
    goToLinkedIn = (e) => {
        e.preventDefault();
        window.open('https://www.linkedin.com/in/kietnguyen7/', "_blank")
    }
    render() {
        return (
            <header className="header">
            
                <Link className="header-icon" to='/'><img src="https://kelp-icon.s3.us-west-1.amazonaws.com/kelptransparent.png"></img></Link>
            
                <input onChange={(e) => this.props.update('category', e)} value={this.props.category} className="place-search" type="text" placeholder="tacos, cheap dinner, Max's"></input>
                <input onChange={(e) => this.props.update('location', e)} value={this.props.location} type="text" placeholder="San Francisco"></input>
                <img onClick={() => this.props.handleSearch()}className="search" src="https://blog.yelp.com/wp-content/uploads/2019/05/SearchIcon.png"/>
                
                <img onClick={this.goToGithub} className="home-links" src="https://image.flaticon.com/icons/png/512/25/25231.png"/>
                <img onClick={this.goToLinkedIn} className="home-links" src="https://image.flaticon.com/icons/png/512/174/174857.png"/>

                <GreetingContainer/>
            </header>
        )
    }
    
    
}

export default Header;

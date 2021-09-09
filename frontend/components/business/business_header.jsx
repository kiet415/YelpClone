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
    goToPersonal = (e) => {
        e.preventDefault();
        window.open('https://kiet-nguyen.netlify.app/', "_blank")
    }
    render() {
        return (
            <header className="header">
            
                <Link className="header-icon" to='/'><img src="https://kelp-icon.s3.us-west-1.amazonaws.com/kelptransparent.png"></img></Link>
                <div className="header-middle">
                    <div className="header-search">
                    <input onChange={(e) => this.props.update('location', e)} value={this.props.location} className="place-search" list="locations" placeholder="San Francisco"></input>
                    <datalist id="locations">
                        <option value="San Francisco"/>
                        <option value="Oakland"/>
                        <option value="San Mateo"/>
                        <option value="San Leandro"/>
                        <option value="Richmond"/>
                        <option value="Fremont"/>
                        <option value="San Jose"/>
                        <option value="Santa Cruz"/>
                        <option value="All"/>
                    </datalist>
                    <img onClick={() => this.props.handleSearch()}className="search" src="https://blog.yelp.com/wp-content/uploads/2019/05/SearchIcon.png"/>
                    </div>

                    
                </div>
                <div className="header-icons"> 
                        <img onClick={this.goToGithub} className="nav-links" src="https://image.flaticon.com/icons/png/512/25/25231.png"/>
                        <img onClick={this.goToLinkedIn} className="nav-links" src="https://image.flaticon.com/icons/png/512/174/174857.png"/>
                        <img onClick={this.goToPersonal} className="nav-links" src="https://cdn4.iconfinder.com/data/icons/e-commerce-181/512/477_profile__avatar__man_-512.png"/>
                    
                <GreetingContainer/>
                </div>
            </header>
        )
    }
    
    
}

export default Header;

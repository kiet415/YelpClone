import React from "react";
import GreetingContainer from '../greeting/greeting_container'
import { Link } from "react-router-dom";
import BusinessIndexItem from "../business/business_index_item";
class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: '',
            location: '',
        }
    }

    componentDidMount() {
        this.props.fetchBusinesses();
    }
    loggedIn = () => {
        return (
            <div className="navEnd">
                <h1 className="home-welcome">Welcome {this.props.user[this.props.currentUser].firstName}</h1>
                <button className="home-logOut" onClick={this.props.logout}>Log Out</button>
            </div>
        )
    }

    loggedOut = () => {
        return (
            <div className="navEnd">
                <Link className="home-logIn" to="/login">Log In</Link>
                <Link className="home-signUp"to="/signup">Sign Up</Link>
            </div>
        )   
    }
    randomNumbers = () => {
        let res = [];
        res.push(Math.floor(Math.random() * this.props.businesses.length))
        res.push(Math.floor(Math.random() * this.props.businesses.length))
        res.push(Math.floor(Math.random() * this.props.businesses.length))
        return res;
    }
    getRatingsPicture = (rating) => {
        if(rating === 0) {
            return "https://kelp-icon.s3.us-west-1.amazonaws.com/large_0.png";
        } else if (rating === 1) {
            return "https://kelp-icon.s3.us-west-1.amazonaws.com/large_1.png"
        } else if (rating === 1.5) {
            return "https://kelp-icon.s3.us-west-1.amazonaws.com/large_1_half.png"
        } else if (rating === 2) {
            return "https://kelp-icon.s3.us-west-1.amazonaws.com/large_2.png"
        } else if (rating === 2.5) {
            return "https://kelp-icon.s3.us-west-1.amazonaws.com/large_2_half.png"
        } else if (rating === 3) {
            return "https://kelp-icon.s3.us-west-1.amazonaws.com/large_3.png"
        } else if (rating === 3.5) {
            return "https://kelp-icon.s3.us-west-1.amazonaws.com/large_3_half.png"
        } else if (rating === 4) {
            return "https://kelp-icon.s3.us-west-1.amazonaws.com/large_4.png"
        } else if (rating === 4.5) {
            return "https://kelp-icon.s3.us-west-1.amazonaws.com/large_4_half.png"
        } else if (rating === 5) {
            return "https://kelp-icon.s3.us-west-1.amazonaws.com/large_5.png"
        }
    }
    update = (field, e) => {
        this.setState({ [field]: e.currentTarget.value});
    }
    handleSearch = () => {
        let obj = {category: this.state.category, location: this.state.location}
        this.props.history.push("/business")
        //this.props.fetchBusinesses(obj);
    }

    render() {
        if(this.props.businesses === undefined) return null;
        let idx = this.randomNumbers();
        console.log(this.props)
        return (
            <div className="homePage">

                <div className="home-main">
                    <div className="home-container">   
                        <header >
                            <nav className="navLinks">
                                <div className="navStart">
                                    <a className="github" href="https://github.com/kiet415">Github</a>
                                    <a className="linked-in"href="https://www.linkedin.com/in/kietnguyen7/">LinkedIn</a>
                                </div>
                                
                                {this.props.currentUser? this.loggedIn() : this.loggedOut()}
                            </nav>
                            
                        </header>
                        
                        <div className="home-icon">
                            <Link to="/"><img src="https://kelp-icon.s3.us-west-1.amazonaws.com/kelptransparent.png"></img></Link>
                        </div>

                        <div className="home-search">
                            <span className="spanA">Find</span><input onChange={(e) => this.update('category', e)} className="home-category" type="text" placeholder="tacos, cheap dinner, Max's"></input>
                            <span className="spanB">Near</span><input onChange={(e) =>this.update('location', e)} type="text" placeholder="San Francisco"></input>
                            
                            <img onClick={this.handleSearch} className="home-search" src="https://blog.yelp.com/wp-content/uploads/2019/05/SearchIcon.png"/>
                            
                        </div>
                        

                    </div>

                    <div className="homePage-bottom">
                        <div className="homePage-title">Find the Best Businesses in Town</div>
                        <div className="try-places">
                            {this.props.businesses.map((business,index) => 
                                (idx.includes(index)) ? 
                                <div className="home-items">
                                    <img className="home-img" src={business.pictures[0]}/>
                                    <div className="home-itemName">
                                        <BusinessIndexItem
                                            business={business}
                                            fetchBusiness={this.props.fetchBusiness}
                                            id={business.id}
                                        /> 
                                    </div>
                                    <div> 
                                        <div className="home-desc"><img src={this.getRatingsPicture(business.rating)}/> {business.numRating}</div>
                                        {business.categories.map((cate, idx) => 
                                        
                                        (idx !== business.categories.length-1) ? 
                                                <span className="home-desc"> {cate} - </span> 
                                                : 
                                                <span className="home-desc"> {cate} </span> 
                                        )}
                                    </div>  
                                    <div className="home-desc">{business.city} </div>
                                    </div>
                                : 
                                null
                            )}
                        </div>
                    </div>
                   {/* {this.props.business.categories.map((cate, idx) => 
                                    
                    (idx !== this.props.business.categories.length-1) ? 
                            <span> {cate} - </span> 
                            : 
                            <span> {cate} </span> 
                    )} */}
            
                </div>
                
            </div>
        )
    }
}

export default HomePage;
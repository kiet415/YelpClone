import React from 'react';
import { withRouter } from 'react-router-dom';
import BusinessHeader from "../business/business_header"
class ReviewForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            rating: 5,
            body: '',
            id: '',
            category:'',
            location:'',
        }
    }
    componentDidMount() {
        this.props.fetchBusiness();
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if(!this.props.user) {
            alert("Please log in!")
        }  else {
            let today = new Date();
            let dateText = (today.getMonth()+1) + "-" + today.getDate() + "-" + today.getFullYear();
            const review = {
                rating: this.state.rating,
                body: this.state.body,
                userId: this.props.user.id,
                businessId: this.props.match.params.id,
                date: dateText,
                firstName: this.props.user.firstName,
                lastName: this.props.user.lastName
            };
            this.props.createReview(review);
            this.navigateToBusinessShow();
        }
        
    }
    navigateToBusinessShow = () => {
        this.props.history.push(`/business/${this.props.match.params.id}`)
    }
    
    update(field) {
        return e =>this.setState({ [field]: e.currentTarget.value});
    }
   
    // update = (field, e) => {
    //     this.setState({ [field]: e.currentTarget.value});
    // }
    // handleSearch = () => {
    //     let obj = {category: this.state.category, location: this.state.location}
    //     this.props.history.push("/business")
    //     this.props.fetchBusinesses(obj);
    // }
    render() {
        if(this.props.business === undefined) return null;
        let placeholder=`
        Doesn't look like much when you walk past, but I was practically dying of 
        hunger so I popped in. The definition of a hole-in-the-wall. I got the regular
        hambuger and wow.. there are no words. A classic burger done right. Crisp 
        bun, juicy patty, stuffed with all the essentials (ketchup, shredded lettuce,
        tomato, and pickles). There's about a million options available between the
        menu board and wall full of specials, so it can get a little overwhelming, but 
        you really can't go wrong. Not much else to say besides go see for yourself! 
        You won't be disapointed.`
        
        return (
            
            <div>
                <BusinessHeader
                location={this.state.location}
                category={this.state.category}
                update={this.update}
                handleSearch={this.handleSearch}
                />
                <div className="form-page">
                    <div className="form-title">
                        <div>{this.props.business.name} </div>
                        <a href="https://www.yelp.com/guidelines">Read our review guidelines</a>
                    </div>
                    <div className="review-box"> 
                        <form onSubmit={this.handleSubmit}>
                            
                            <input
                                type="number"
                                value={this.state.rating}
                                placeholder="5"
                                onChange={this.update("rating")}
                                className="review-rating"
                                maxLength="3"
                                min="1"
                                max="5"
                            />
                            <label>Select your rating</label>
                            <br/>
                            <textarea
                                value={this.state.body}
                                onChange={this.update('body')}
                                placeholder={placeholder}
                                className="review-body"
                            /> 
                            <button className="form-btn" onClick={this.navigateToBusinessShow}>Go Back</button>

                            <input className="form-btn" type="submit" value="Post Review"/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}


export default withRouter(ReviewForm);
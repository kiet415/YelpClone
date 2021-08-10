import React from 'react';
import { withRouter } from 'react-router-dom';
import BusinessHeader from "../business/business_header"
class ReviewForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            rating: 5,
            body: '',
            id: ''
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
    render() {
        if(this.props.business === undefined) return null;
        console.log(this.props)
        
        return (
            <div>
            <BusinessHeader/>
            
             {this.props.business.name}
                <div className="review-box"> 
                    <form onSubmit={this.handleSubmit}>
                        <label>Rating</label>
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
                        <br/>
                        <input 
                            type="text"
                            cols="30"
                            rows="10"
                            value={this.state.body}
                            onChange={this.update('body')}
                            placeholder="I really love this place!"
                            className="review-body"
                        />

                        <input type="submit" value="Post Review"/>
                    </form>
                </div>
                <button onClick={this.navigateToBusinessShow}>Cancel</button>
            </div>
        )
    }
}


export default withRouter(ReviewForm);
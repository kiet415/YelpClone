import React from 'react';
import BusinessHeader from "./business_header"
import ReviewItem from '../review/review_item'
import BusinessTimes from './business_times'
import { Link } from 'react-router-dom';

import KelpMap from "../map/kelp_map"
class BusinessShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: '',
            location: '',
        }
    }
    componentDidMount() {
        this.props.fetchBusiness();
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
        this.props.fetchBusinesses(obj)

    }
    checkReviews() {
        if(this.props.reviews.length > 0) {
            return (
                <div>
                <h1 className="review-title">Recommended Reviews</h1>
                    {this.props.reviews.map(review => (
                        <ReviewItem
                            body={review.body}
                            img={this.getRatingsPicture(review.rating)}
                            date={review.date}
                            key={review.id}
                            firstName={review.firstName}
                            lastName={review.lastName}
                        />
                        
                    ))}
                </div>
            )
        } else {
            return (
                <div className="no-reviews">Be the First for a Review!</div>
            )
        }
    }
    
    render() {
        if(this.props.business === undefined) return null;
        let rating = this.getRatingsPicture(this.props.business.rating)
        let photo = {
            backgroundImage: 'url(' + this.props.business.pictures[0] + ')',
        }
        let photo1 = {
            backgroundImage: 'url(' + this.props.business.pictures[1] + ')',
        }
        let photo2 = {
            backgroundImage: 'url(' + this.props.business.pictures[2] + ')',
        }

        return (
            
            <div className="">
                <BusinessHeader
                location={this.state.location}
                category={this.state.category}
                update={this.update}
                handleSearch={this.handleSearch}
                />
                <div className="business-info">
                    <div className="business-info1" style={photo}>
                        <div className="business-desc">
                            <h2 className="business-name">{this.props.business.name}</h2>
                            <div className="business-rating">
                                <img className="rating" src={rating}></img>
                                {this.props.business.numRating} reviews
                            </div>
                            
                            <div className="allPhotos-show">
                                <div>
                                    {this.props.business.price}&nbsp;-&nbsp; 
                                    {this.props.business.categories.map((cate, idx) => 
                                    
                                    (idx !== this.props.business.categories.length-1) ? 
                                            <span> {cate} - </span> 
                                            : 
                                            <span> {cate} </span> 
                                    )}
                                </div>    
                            </div> 
                        </div>
                    </div>
                    <div className="business-info2" style={photo1}></div>
                    <div className="business-info3" style={photo2}>
                        <button><Link to={`/business/${this.props.business.id}/all-photos`}
                            >See All Photos</Link> </button> 
                    </div>
                    
                </div>
                <div className="business-body">

                   <div className="business-bodyLeft">
                        <button className="review-link">
        
                            <Link to={`/business/${this.props.business.id}/new-review`}
                            >Write a Review</Link> 
                        </button>
                        <button className="review-link">
                        <Link to={`/business/${this.props.business.id}/new-photo`}
                            >Add Photo</Link> 
                            
                        </button>
                        <div className="location-title">Location and Hours</div>
                        <div className="location-hours"> 
                            <div className="location-map">
                                Google map here with directions
                            </div>
                            <div className="location-time">
                                <BusinessTimes 
                                    hours={this.props.business.openHours}
                                />
                            </div>
                        </div>
                        
                        
                        {this.checkReviews()}
                                    
                   </div>
                    
                    <div className="business-bodyRight">
                        <span className="business-side-info">
                            <div className="business-website"><a href={this.props.business.website}>{this.props.business.name}</a> <span><img src="https://static.thenounproject.com/png/640392-200.png"/></span></div>
                            <div className="business-number"><span>{this.props.business.phoneNumber}</span><span><img src="https://cdn.iconscout.com/icon/free/png-256/phone-2666572-2212584.png"/></span></div>
                            <div className="business-location">
                                <div className="">
                                    <div className="business-st">{this.props.business.location} </div>
                                    <div>{this.props.business.city}, {this.props.business.zipCode}</div>
                                </div>
                                
                                <span><img src="https://cdn.iconscout.com/icon/free/png-256/directions-1782209-1512759.png"/></span>
                                
                                
                            </div>
                        </span>
                    </div>
                    
                </div>
                
            </div>
        )
    }
}

export default BusinessShow;



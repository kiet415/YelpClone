import React from 'react';
import BusinessHeader from "./business_header"
import ReviewItem from '../review/review_item'
import BusinessTimes from './business_times'
class BusinessShow extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        //console.log(this.props)
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
    
    render() {
        
        if(this.props.business === undefined) return null;
        console.log(this.props)
        let rating = this.getRatingsPicture(this.props.business.rating)
        let photo = {
            backgroundImage: 'url(' + this.props.business.photos + ')',
        }
        return (
            
            <div>
                <BusinessHeader/>
                <div className="business-info" style={photo}>
                    <div>
                        <h2 className="business-name">{this.props.business.name}</h2>
                        <div>
                            <img className="rating" src={rating}></img>
                            {this.props.business.numRating} reviews
                        </div>
                        {this.props.business.categories}
                    </div> 
                </div>
                
                <span className="business-side-info">
                    <div className="business-website"><a href={this.props.business.website}>{this.props.business.name}</a></div>
                    <div className="business-number">{this.props.business.phoneNumber}</div>
                    <div className="business-location">{this.props.business.location}</div>
                </span>
                
            
                <br/>
                <BusinessTimes 
                    hours={this.props.business.openHours}
                />
           

                <br/>
                

                <h1>Reviews</h1>
                    {this.props.reviews.map(review => (
                        <ReviewItem
                            body={review.body}
                            img={this.getRatingsPicture(review.rating)}
                            key={review.id}
                        
                        />
                    ))}
            </div>
        )
    }
}

export default BusinessShow;



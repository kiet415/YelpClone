import React from 'react';
import { render } from 'react-dom';
import BusinessIndexItem from './business_index_item.jsx'
import { Link } from 'react-router-dom';
import KelpMap from '../map/kelp_map.jsx';
import BusinessHeader from "./business_header"
class BusinessIndex extends React.Component {
    constructor(props) {
        super(props)
    }   

    componentDidMount() {
        this.props.fetchBusinesses();
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
        // if(this.props.{variable} === undefined) return null;
        if (Object.values(this.props.businesses).length === 0) return null;
        return (
            <div>

            
            <header><BusinessHeader/></header>
            <div className="index-div">
                <div className="index-left">

                    
                    {this.props.businesses.map(business => (
                        <div className="index-item" key={business.id}>
                            <div className="index-img">
                                <img src={business.photos}/>
                            </div>
                            <div className="index-info">
                            
                            {/* <Link to={`/business/${business.id}`}> */}
                                
                                <BusinessIndexItem
                                    business={business}
                                    fetchBusiness={this.props.fetchBusiness}
                                />
                            {/* </Link> */}
                            <div><img src={this.getRatingsPicture(business.rating)}/> {business.numRating}</div>
                            <div>{business.categories}</div>
                            <div>{business.review ? business.review.body : "No reviews yet" } </div>
                            </div>
                        </div>
                    ))}
                        
                    
                </div>
                <div className="index-right">
                    <KelpMap 
                        businesses={this.props.businesses}
                        
                    />
                </div>
                
            </div>
            </div>
        ) 
    }    
}


export default BusinessIndex;

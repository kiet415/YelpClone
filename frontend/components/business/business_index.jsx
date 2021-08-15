import React from 'react';
import { render } from 'react-dom';
import BusinessIndexItem from './business_index_item.jsx'
import { Link } from 'react-router-dom';
import KelpMap from '../map/kelp_map.jsx';
import BusinessHeader from "./business_header"
class BusinessIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            category: '',
            location: '',
        }
    }   

    componentDidMount() {
        //this.props.updateFilter();
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
        
        this.props.fetchBusinesses(obj);
    }
    render() {

        // if(this.props.{variable} === undefined) return null;
        //if (Object.values(this.props.businesses).length === 0) return null;
        return (
            <div>

            
            <header><BusinessHeader
                        location={this.state.location}
                        category={this.state.category}
                        update={this.update}
                        handleSearch={this.handleSearch}
                    />
            </header>
            <div className="index-div">
                <div className="index-left">

                    
                    {this.props.businesses.map(business => (
                        
                        <div className="index-item"  key={business.id}>
                            <div className="index-img">
                                <img src={business.pictures[0]}/>
                            </div>
                            <div className="index-info">
                                <BusinessIndexItem
                                    business={business}
                                    fetchBusiness={this.props.fetchBusiness}
                                />
                            <div><img src={this.getRatingsPicture(business.rating)}/> {business.numRating}</div>
                            <div> 
                                {business.categories.map((cate, idx) => 
                                
                                (idx !== business.categories.length-1) ? 
                                        <span> {cate} - </span> 
                                        : 
                                        <span> {cate} </span> 
                                )}
                            </div>  
                            <div>{business.price} - {business.city} </div>
                            <div> {business.review ? <div className="index-review"><img src="https://icons-for-free.com/iconfiles/png/512/part+1+message-1320568353446515556.png"/> " {business.review.body} " </div> : "No reviews yet" } </div>
                            </div>
                        </div>
                    ))}
                        
                    
                </div>
                <div className="index-right">
                    <KelpMap 
                        businesses={this.props.businesses}
                        updateFilter={this.props.updateFilter}
                        singleBusiness={false}
                        fetchBusiness={this.props.fetchBusiness}
                    />
                </div>
                
            </div>
            </div>
        ) 
    }    
}


export default BusinessIndex;

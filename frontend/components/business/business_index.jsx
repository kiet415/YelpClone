import React from 'react';
import BusinessIndexItem from './business_index_item.jsx'
import KelpMap from '../map/kelp_map.jsx';
import BusinessHeader from "./business_header"
import { withRouter } from "react-router";
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
    redirectToBusiness = (id) => {
        this.props.history.push(`/business/${id}`)
    }
    renderBusinesses = (e) => {
        if(this.props.businesses.length === 0) {
            return (
                
                <div>
                    <BusinessHeader
                        location={this.state.location}
                        category={this.state.category}
                        update={this.update}
                        handleSearch={this.handleSearch}
                    />
                    
                    <img className="business-error" src="https://learn.getgrav.org/user/pages/11.troubleshooting/01.page-not-found/error-404.png"/>
                    <div className="business-error-msg">Please search for something in location</div>
                </div>
            )
        } else {
            return (
                <div>
                <header>
                    <BusinessHeader
                        location={this.state.location}
                        category={this.state.category}
                        update={this.update}
                        handleSearch={this.handleSearch}
                    />
                </header>
                <div className="index-div">
                    <div className="index-left">

                        
                        {this.props.businesses.map((business,idx) => (
                            
                            <div className="index-item"  key={business.id}>
                                <div className="index-img" key={idx+"ea"}>
                                    <img onClick={() => this.redirectToBusiness(business.id)} className="home-img" src={business.pictures[0]}/>
                                </div>
                                <div className="index-info"  key={idx+"eb"}>
                                    <BusinessIndexItem
                                        index={idx+1}
                                        business={business}
                                        fetchBusiness={this.props.fetchBusiness}
                                    />
                                <div  key={idx+"ec"}><img  key={idx+"ed"} src={this.getRatingsPicture(business.rating)} alt="rating"/> {business.numRating}</div>
                                <div> 
                                    {business.categories.map((cate, idx) => 
                                    
                                    (idx !== business.categories.length-1) ? 
                                            <span  key={idx+"ee"}> {cate} - </span> 
                                            : 
                                            <span  key={idx+"ef"}> {cate} </span> 
                                    )}
                                </div>  
                                <div key={idx+"eg"}>{business.price} - {business.city} </div>
                                <div key={idx+"eh"}>{business.review ? <div className="index-review"><img src="https://icons-for-free.com/iconfiles/png/512/part+1+message-1320568353446515556.png"/> " {business.review.body} " </div> : "No reviews yet" } </div>
                                </div>
                            </div>
                        ))}
                            
                        
                    </div>
                    <div className="index-right">
                        <KelpMap 
                            className={'kelp-map'}
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
    render() {
        return (
            <div>
                {this.renderBusinesses()}
            </div>
        ) 
    }    
}


export default withRouter(BusinessIndex);

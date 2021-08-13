import React from "react";
import BusinessHeader from "../business/business_header"
import { Link } from "react-router-dom";
class AllPhotos extends React.Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {
        //this.props.fetchBusiness(this.props.match.params.business_id)
    }
    
    addPhoto = (businessId) => {
        if(!this.props.id) {
            alert("Please log in!")
        } else {
            this.props.history.push(`/business/${businessId}/new-photo`)
        }
    }
    
    render() {
        if(this.props.business === undefined) return null;
        return (
            <div >
                <BusinessHeader/>
                <div className="photos-page">
                    <div className="photos-top">
                    <div className="photos-title">Photos for {this.props.business.name}</div>
                        <button onClick={() => this.addPhoto(this.props.business.id)}
                            className="photos-review-link">   
                            Add Photo
                        </button>
                        
                        
                    </div>
                    <div className="photos-div">
                        {this.props.business.photoUrls.map(photo => (
                            <img src={photo}></img>
                        ))}
                    </div>
                    
                </div>
            </div>
        )
    }
}
export default AllPhotos;
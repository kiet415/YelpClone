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
    goToPhoto = (link) => {
        window.open(link, "_blank")
    }
    render() {
        console.log(this.props.business)
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
                        {this.props.business.pictures.map((photo,index) => (
                            <img className="busi-all-photos" onClick={() => this.goToPhoto(photo)} key={index} src={photo}></img>
                        ))}
                        {this.props.business.photoUrls.map((photo,index) => (
                            <img className="busi-all-photos" onClick={() => this.goToPhoto(photo)} key={index} src={photo}></img>
                        ))}
                    </div>
                    
                </div>
            </div>
        )
    }
}
export default AllPhotos;
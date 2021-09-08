import React from "react";
import BusinessHeader from "../business/business_header"
import { Link } from "react-router-dom";
class AllPhotos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: '',
            location: '',
        }
    }
    componentDidMount() {
        this.props.fetchBusiness()
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
    update = (field, e) => {
        this.setState({ [field]: e.currentTarget.value});
    }
    handleSearch = () => {
        if(this.state.location === 'All' || this.state.location === '') {
            this.props.fetchBusinesses().then(
                this.props.history.push("/business")
            );
        }
        let obj = {category: this.state.category, location: this.state.location}
        this.props.fetchBusinesses(obj).then(
            this.props.history.push("/business")
        )
    }
    render() {
        //console.log(this.props.business)
        if(this.props.business === undefined) return null;
        return (
            <div >
                <BusinessHeader
                    location={this.state.location}
                    category={this.state.category}
                    update={this.update}
                    handleSearch={this.handleSearch}
                />
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
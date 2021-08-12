import React from "react";
import BusinessHeader from "../business/business_header"
class AllPhotos extends React.Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {
        //this.props.fetchBusiness(this.props.match.params.business_id)
    }
    
    
    render() {
        console.log(this.props)
        if(this.props.business === undefined) return null;
        return (
            <div >
                <BusinessHeader/>
                {this.props.business.name}
                {this.props.business.photosUrl}
                {this.props.business.photoUrls.map(photo => (
                    <img src={photo}></img>
                ))}
            </div>
        )
    }
}
export default AllPhotos;
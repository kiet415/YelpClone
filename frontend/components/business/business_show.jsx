import React from 'react';
import BusinessHeader from "./business_header"
class BusinessShow extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log(this.props)
        this.props.fetchBusiness();
        
    }
    render() {
        if(this.props.business === undefined) return null;
        console.log(this.props)
        return (
            <div>
                <BusinessHeader/>
                {this.props.business.name} 
                <br/>
                {this.props.business.location}
                <br/>
                {this.props.business.categories}
            </div>
        )
    }
}

export default BusinessShow

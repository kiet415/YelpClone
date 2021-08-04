import React from 'react';
import { Link } from 'react-router-dom';
class BusinessIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log(this.props)
        this.props.fetchBusiness(this.props.business.id);
        
    }
    render() {
        if(this.props.business === undefined) return null;
        return (
            <div>
                <Link to={`/business/${this.props.business.id}`} >
                    {this.props.business.name} 
                </Link>
            </div>
        )
    }
}

export default BusinessIndexItem

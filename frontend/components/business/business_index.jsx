import React from 'react';
import { render } from 'react-dom';
import BusinessIndexItem from './business_index_item.jsx'
import { Link } from 'react-router-dom';

class BusinessIndex extends React.Component {
    constructor(props) {
        super(props)
    }   

    componentDidMount() {
        this.props.fetchBusinesses();
    }

    render() {
        // if(this.props.{variable} === undefined) return null;
        console.log(this.props.business)
        if (Object.values(this.props.businesses).length === 0) return null;
        return (
            <div>
                <h1>Businesses </h1>
                {this.props.businesses.map(business => (
                    <Link to={`/business/${business.id}`} 
                        key={business.id}>
                        <BusinessIndexItem
                            business={business}
                            fetchBusiness={this.props.fetchBusiness}
                        />
                    </Link>
                ))}
            </div>
        ) 
    }    
}


export default BusinessIndex;
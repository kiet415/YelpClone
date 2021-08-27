import React from 'react';
import { Link } from 'react-router-dom';
class BusinessIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }
   
    
    render() {
        if(this.props.business === undefined) return null;
        return (
            <div>
                <Link key={this.props.business.id} className="item-name" to={`/business/${this.props.business.id}`} >
                    {this.props.index}. {this.props.business.name} 
                
                </Link>
            </div>
        )
    }
}

export default BusinessIndexItem

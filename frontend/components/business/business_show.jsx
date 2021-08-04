import React from 'react';

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
        return (
            <div>
                {this.props.business.name} 
                SHOW PAGE H ERE
            </div>
        )
    }
}

export default BusinessShow

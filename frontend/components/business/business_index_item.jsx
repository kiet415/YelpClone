import React from 'react';

class BusinessIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.business.name}
            </div>
        )
    }
}

export default BusinessIndexItem
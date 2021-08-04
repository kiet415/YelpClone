import React from 'react';
import { withRouter } from 'react-router-dom';

class BusinessIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                {this.state.props.business.name}
            </div>
        )
    }
}

export default withRouter(BusinessIndexItem)
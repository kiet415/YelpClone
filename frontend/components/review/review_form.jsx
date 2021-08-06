import React from 'react';
import { withRouter } from 'react-router-dom';

class ReviewForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            rating: 3,
            body: ''
        }
    }

    render() {
        return (
            <div>
                REVIEW FORM HERE
            </div>
        )
    }
}


export default ReviewForm;
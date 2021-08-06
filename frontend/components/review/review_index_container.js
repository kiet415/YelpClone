import { connect } from 'react-redux';

import { createReview } from '../../actions/business_actions.js';
import ReviewForm from './review_form';


const mapStateToProps = state => ({
    
})

const mapDispatchToProps = dispatch => ({
    createReview: review => dispatch(createReview(review))
});
  


export default connect(null, mapDispatchToProps)(ReviewForm);
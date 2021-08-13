import { connect } from 'react-redux';

import {fetchBusiness } from '../../actions/business_actions.js';
import { createReview } from '../../actions/review_actions.js';
import ReviewForm from './review_form';

const mapStateToProps = (state , ownProps) => {
    
    return  ({
        user: state.entities.users[state.session.id], 
        business: state.entities.businesses[ownProps.match.params.id]
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    createReview: review => dispatch(createReview(review)),
    fetchBusiness: () => dispatch(fetchBusiness(ownProps.match.params.id)),
    fetchBusinesses: (businesses) => dispatch(fetchBusinesses(businesses)),

});
  


export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
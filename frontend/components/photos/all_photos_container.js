import { connect } from 'react-redux';

import {fetchBusiness, fetchBusinesses } from '../../actions/business_actions.js';
import AllPhotos from "./all_photos"

const mapStateToProps = (state , ownProps) => {
    return  ({
        id: state.session.id,
        business: state.entities.businesses[ownProps.match.params.id]
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchBusiness: () => dispatch(fetchBusiness(ownProps.match.params.id)),
    fetchBusinesses: (businesses) => dispatch(fetchBusinesses(businesses)),

});
  


export default connect(mapStateToProps, mapDispatchToProps)(AllPhotos);
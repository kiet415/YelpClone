import { connect } from 'react-redux';

import {fetchBusiness } from '../../actions/business_actions.js';
import AllPhotos from "./all_photos"

const mapStateToProps = (state , ownProps) => {
    return  ({
        business: state.entities.businesses[ownProps.match.params.id]
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchBusiness: id => dispatch(fetchBusiness(id))
});
  


export default connect(mapStateToProps, mapDispatchToProps)(AllPhotos);
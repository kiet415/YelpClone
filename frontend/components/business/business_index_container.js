import { connect } from 'react-redux';
import BusinessIndex from './business_index';
import { fetchBusinesses, fetchBusiness } from '../../actions/business_actions';

const mapStateToProps = state => {
    return ({
        businesses: Object.values(state.entities.businesses)
    
    })
}
const mapDispatchToProps = dispatch => ({
    fetchBusinesses: (businesses) => dispatch(fetchBusinesses(businesses)),
    fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId))

})

export default connect(mapStateToProps, mapDispatchToProps)(BusinessIndex);
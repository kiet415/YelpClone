import { connect } from 'react-redux';
import { fetchBusinesses, fetchBusiness } from '../../actions/business_actions';
import Search from "./search"
import { updateFilter } from '../../actions/filter_actions';
const mapStateToProps = state => {
    return ({
        businesses: Object.values(state.entities.businesses)
    
    })
}
const mapDispatchToProps = dispatch => ({
    fetchBusinesses: (businesses) => dispatch(fetchBusinesses(businesses)),
    fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))

})

export default connect(mapStateToProps, mapDispatchToProps)(Search);
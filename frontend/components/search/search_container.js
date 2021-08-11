import { connect } from 'react-redux';
import { fetchBusinesses, fetchBusiness } from '../../actions/business_actions';
import Search from "./search"
import { updateFilter } from '../../actions/filter_actions';
import {asArray} from '../../reducers/selectors'
const mapStateToProps = state => {
    return ({
        businesses: asArray(state.entities),
        price: state.ui.filters.price,
        categories: state.ui.filters.price
    
    })
}
const mapDispatchToProps = dispatch => ({
    fetchBusinesses: (businesses) => dispatch(fetchBusinesses(businesses)),
    fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))

})

export default connect(mapStateToProps, mapDispatchToProps)(Search);
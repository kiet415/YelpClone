import { connect } from 'react-redux';
import BusinessShow from './business_show';
import { fetchBusiness, fetchBusinesses } from '../../actions/business_actions';
import { updateFilter } from '../../actions/filter_actions';
const mapStateToProps = (state, ownProps) => {
    return ({
        business: state.entities.businesses[ownProps.match.params.id],
        reviews: Object.values(state.entities.reviews)
    })
}
const mapDispatchToProps = ( dispatch , ownProps) => ({
    fetchBusiness: () => dispatch(fetchBusiness(ownProps.match.params.id)),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
    fetchBusinesses: (businesses) => dispatch(fetchBusinesses(businesses)),

})



export default connect(mapStateToProps, mapDispatchToProps)(BusinessShow);

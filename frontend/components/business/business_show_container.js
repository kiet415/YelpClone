import { connect } from 'react-redux';
import BusinessShow from './business_show';
import { fetchBusiness } from '../../actions/business_actions';
const mapStateToProps = (state, ownProps) => {
    return ({
        business: state.entities.businesses[ownProps.match.params.id]
    })
}
const mapDispatchToProps = ( dispatch , ownProps) => ({
    fetchBusiness: () => dispatch(fetchBusiness(ownProps.match.params.id))

})



export default connect(mapStateToProps, mapDispatchToProps)(BusinessShow);
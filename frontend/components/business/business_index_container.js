import { connect } from 'react-redux';
import BusinessIndex from './business_index';
import { fetchBusinesses } from '../../actions/business_actions';

const mapStateToProps = state => {
    console.log(state)
    return ({
        businesses: state.entities.businesses
    })
}
const mapDispatchToProps = dispatch => ({
    fetchBusinesses: (businesses) => dispatch(fetchBusinesses(businesses))
})

export default connect(mapStateToProps, mapDispatchToProps)(BusinessIndex);
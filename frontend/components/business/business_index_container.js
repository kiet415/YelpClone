import { connect } from 'react-redux';
import BusinessIndex from './business_index';
import { fetchBusinesses } from '../../actions/business_actions';

const mapStateToProps = state => ({
    id: state.id,
    name: state.name,
    location: state.location,
    rating: state.rating,
    phone_number: state.phone_number,
    website: state.website,
    open_hours: state.open_hours,
    amenities: state.amenities,
    num_rating: state.num_rating,
    categories: state.categories,
})
const mapDispatchToProps = dispatch => ({
    fetchBusinesses: (businesses) => dispatch(fetchBusinesses(businesses))
})

export default connect(mapStateToProps, mapDispatchToProps)(BusinessIndex);
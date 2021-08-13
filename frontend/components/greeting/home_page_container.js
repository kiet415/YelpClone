import { connect } from 'react-redux';
import { fetchBusinesses } from '../../actions/business_actions';
import { logout } from '../../actions/session_actions';
import HomePage from './home_page'

const mapStateToProps = ( state) => {
    return ({ 
        businesses: Object.values(state.entities.businesses),
        currentUser: state.session.id,
        user: state.entities.users,
    })
}

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    fetchBusinesses: (businesses) => dispatch(fetchBusinesses(businesses)),
    fetchBusiness: (businessId) => dispatch(fetchBusiness(businessId)),

})


export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
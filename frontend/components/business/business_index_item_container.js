import { connect } from 'react-redux';
import BusinessIndexItem from './business_index_item';
import { fetchBusiness } from '../../actions/business_actions';
const mapStateToProps = (state, ownProps) => {
    //console.log(ownProps)
    //console.log(state)
    return ({
    
        // business: state.entities.business
        business: state.entities.businesses[ownProps.match.params.id]
    })
}


export default connect(mapStateToProps, null)(BusinessIndexItem);
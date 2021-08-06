import {
    RECEIVE_REVIEW,
    RECEIVE_BUSINESSES,
    RECEIVE_BUSINESS,
    RECEIVE_REVIEWS
  } from '../actions/business_actions';
  
  const businessesReducer = (state = {}, action) => {
    Object.freeze(state)
    console.log(action.reviews)
    switch(action.type) {
      case RECEIVE_BUSINESSES:
        return action.businesses;
      case RECEIVE_BUSINESS:
        const newBusiness = { [action.business.id]: action.business };
        return Object.assign({}, state, newBusiness);
      
      default:
        return state;
    }
  };
  
  export default businessesReducer;
  
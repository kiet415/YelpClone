import {
    RECEIVE_REVIEW,
    RECEIVE_BUSINESSES,
    RECEIVE_BUSINESS
  } from '../actions/business_actions';
  
  const businessesReducer = (state = {}, action) => {
    Object.freeze(state)
    switch(action.type) {
      case RECEIVE_BUSINESSES:
        return action.businesses;
      case RECEIVE_BUSINESS:
        const newBusiness = { [action.business.id]: action.business };
        return Object.assign({}, state, newBusiness);
      case RECEIVE_REVIEW:
        const { review, rating } = action;
        const newState = Object.assign({}, state);
        newState[review.business_id].reviewIds.push(review.id);
        newState[review.business_id].rating = rating;
        return newState;
      default:
        return state;
    }
  };
  
  export default businessesReducer;
  
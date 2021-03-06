import {
    RECEIVE_REVIEW,
    RECEIVE_REVIEWS,
    UPDATE_REVIEW,
  } from '../actions/review_actions';
import {
    RECEIVE_BUSINESS
} from '../actions/business_actions'
const reviewsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_BUSINESS:
            return action.reviews || {};
        case RECEIVE_REVIEW:
            const review = action.payload.review;
            return Object.assign({}, state, { [review.id]: review });
        case RECEIVE_REVIEWS:
            return action.reviews;
        default:
            return state;
        
    }
}

export default reviewsReducer

// case RECEIVE_REVIEW:
//         const { body, rating } = action;
//         const newState = Object.assign({}, state);
//         newState[review.business_id].reviewIds.push(review.id);
//         newState[review.business_id].rating = rating;
//         return newState;
//       case RECEIVE_REVIEWS:
//         return action.reviews;
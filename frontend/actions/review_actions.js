export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
import * as APIUtil from '../util/business_api_util';

export const receiveReview = ({ body, rating, userId }) => ({
    type: RECEIVE_REVIEW,
    body,
    rating,
    userId,
  });
  export const receiveReviews = reviews  => ({
    type: RECEIVE_REVIEWS,
    reviews
  });
  
  export const createReview = review => dispatch => (
    APIUtil.createReview(review).then(review => (
      dispatch(receiveReview(review))
    ))
  );
  
  export const fetchReviews = id => dispatch => (
    APIUtil.fetchReviews(id).then(review => (
      dispatch(receiveReviews(review))
    ))
  )
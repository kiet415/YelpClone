export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const UPDATE_REVIEW = 'UPDATE_REVIEW';

import * as APIUtil from '../util/business_api_util';

export const receiveReview = (payload) => ({
  type: RECEIVE_REVIEW,
  payload
});

export const receiveReviews = reviews  => ({
  type: RECEIVE_REVIEWS,
  reviews
});

export const updateReview = review  => ({
  type: UPDATE_REVIEW,
  review
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

export const reviewUpdate = review => dispatch => (
  APIUtil.updateReview(review).then(review => (
    dispatch(updateReview(review))
  ))
)
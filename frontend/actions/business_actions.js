import * as APIUtil from '../util/business_api_util';

export const RECEIVE_BUSINESSES = 'RECEIVE_BUSINESSES';
export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';

export const receiveBusinesses = businesses => ({
  type: RECEIVE_BUSINESSES,
  businesses,
});

export const receiveBusiness = ({ business, reviews }) => ({
  type: RECEIVE_BUSINESS,
  business,
  reviews,

});

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
export const fetchBusinesses = data => dispatch => (
  APIUtil.fetchBusinesses(data).then(businesses => (
    dispatch(receiveBusinesses(businesses))
  ))
);

export const fetchBusiness = id => dispatch => (
  APIUtil.fetchBusiness(id).then(payload => (
    dispatch(receiveBusiness(payload))
  ))
);



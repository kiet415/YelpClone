import * as APIUtil from '../util/business_api_util';

export const RECEIVE_BUSINESSES = 'RECEIVE_BUSINESSES';
export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

export const receiveBusinesses = businesses => ({
  type: RECEIVE_BUSINESSES,
  businesses,
});

export const receiveBusiness = ({ business, reviews }) => ({
  type: RECEIVE_BUSINESS,
  business,
  reviews,

});

export const receiveReview = ({ review, rating, user }) => ({
  type: RECEIVE_REVIEW,
  review,
  rating,
  user,
});

export const createReview = review => dispatch => (
  APIUtil.createReview(review).then(review => (
    dispatch(receiveReview(review))
  ))
);
export const fetchReview = id => dispatch => (
  APIUtil.fetchReview(id).then(review => (
    dispatch(receiveReview(review))
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



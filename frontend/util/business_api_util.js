export const fetchBusinesses = data => (
    $.ajax({
      method: 'GET',
      url: 'api/businesses',
      data
    })
  );
  
export const fetchBusiness = id => (
    $.ajax({
        method: 'GET',
        url: `api/businesses/${id}`
    })
);

export const createReview = review => (
    $.ajax({
        method: 'POST',
        url: 'api/reviews',
        data: { review }
    })
);

export const fetchReviews = businessId => (
    $.ajax({
        method: 'GET',
        url: `api/businesses/${businessId}/reviews`
    })
);





  
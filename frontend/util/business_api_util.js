export const fetchBusinesses = filters => (
    $.ajax({
      method: 'GET',
      url: 'api/businesses',
      filters
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
        url: `api/businesses/${review.business_id}/reviews`,
        data: { review }
    })
);

export const fetchReviews = businessId => (
    $.ajax({
        method: 'GET',
        url: `api/businesses/${businessId}/reviews`
    })
);

export const updateReview = review => (
    $.ajax({
        method: "PATCH",
        url: `api/businesses/${review.business_id}/reviews/${review.id}`,
        data: {review}
    })
)








  
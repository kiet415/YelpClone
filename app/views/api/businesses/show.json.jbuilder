json.business do
  json.partial! '/api/businesses/business', business: @business
end

json.reviews do
  @business.reviews.each do |review|
    json.set! review.id do
      json.extract! review, :id, :rating, :body, :business_id, :user_id
    end
  end
end


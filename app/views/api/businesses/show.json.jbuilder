json.business do
  json.partial! '/api/businesses/business', business: @business
  json.photoUrls @business.photos.map { |file| url_for(file) }
end

json.reviews do
  @business.reviews.each do |review|
    json.set! review.id do
      json.extract! review, :id, :rating, :body, :business_id, :user_id, :date, :first_name, :last_name
    end
  end
end



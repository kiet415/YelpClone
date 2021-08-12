
@businesses.each do |business|
  json.set! business.id do
    json.partial! 'business', business: business
    json.review business.reviews.first 
  end
end               

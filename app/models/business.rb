class Business < ApplicationRecord
    validates :name, :rating, presence: true
    # validates :phone_number, :website, uniqueness: true
    validates :rating, inclusion: {in: (1..5)}

    has_many :reviews

    has_many_attached :photos

    
    def self.in_bounds(bounds)
        self.where("lat < ?", bounds[:northEast][:lat])
            .where("lat > ?", bounds[:southWest][:lat])
            .where("lng > ?", bounds[:southWest][:lng])
            .where("lng < ?", bounds[:northEast][:lng])
    end
end
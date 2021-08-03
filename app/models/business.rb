class Business < ApplicationRecord
    validates :name, :location, :rating, :phone_number, :website, :open_hours, :amenities, presence: true
    validates :phone_number, :website, uniqueness: true
    validates :rating, inclusion: {in: (1..5)}

    has_many :reviews

end
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# BUSINESS
# t.string "name", null: false
#     t.string "location", null: false
#     t.float "rating", null: false
#     t.string "phone_number", null: false
#     t.string "website", null: false
#     t.string "open_hours", null: false
#     t.string "amenities", null: false
#     t.integer "num_rating"
#     t.string "categories"
Business.delete_all
User.delete_all


kiet = User.create!({email: 'kiet@yahoo.com', first_name: 'Kiet', last_name: "Nguyen", password:"aaaaaa"})

a = Business.create!({name: "Marugame Udon", location: "3251 20th Ave Space 184 San Francisco, CA 94132",
                    rating: 4, phone_number: "(415) 680-1280", website: "marugameudon.com",
                    open_hours: 'Mon 11:00 AM - 9:00 PM Tue 11:00 AM - 9:00 PM Wed 11:00 AM - 9:00 PM 
                    Thu 11:00 AM - 9:00 PM Fri 11:00 AM - 9:00 PM Sat 11:00 AM - 9:00 PM Sun 11:00 AM - 9:00 PM',
                    amenities: 'Offers Delivery, Offers Takeout, No Reservations, Accepts Credit Cards',
                    num_rating: 1912, categories: 'Japanese, Noodles'
                    })


b = Business.create!({name: "Dumpling Kitchen", location: "1935 Taraval St San Francisco, CA 94116",
                    rating: 4, phone_number: "(415) 682-8938", website: "dumplingkitchenca.com",
                    open_hours: 'Mon 11:00 AM - 3:00 PM 5:00 PM - 9:30 PM Tue 11:00 AM - 3:00 PM 5:00 PM - 9:30 PM 
                    Wed 11:00 AM - 3:00 PM 5:00 PM - 9:30 PM Thu 11:00 AM - 3:00 PM 5:00 PM - 9:30 PM 
                    Fri 11:00 AM - 3:00 PM 5:00 PM - 9:30 PM Sat 11:00 AM - 9:30 PM Sun 11:00 AM - 9:30 PM',
                    amenities: 'Takes Reservations, Offers Delivery, Offers Takeout, Accepts Credit Cards',
                    num_rating: 1697, categories: 'Chinese'
})

create_table "reviews", force: :cascade do |t|
    t.string "body", null: false
    t.float "rating", null: false
    t.integer "user_id", null: false
    t.integer "business_id", null: false
    t.string "date", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end
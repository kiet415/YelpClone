class CreateBusinesses < ActiveRecord::Migration[5.2]
  def change
    create_table :businesses do |t|
      t.string :name, null: false
      t.string :location, null: false
      t.float :rating, null: false
      t.string :phone_number, null: false
      t.string :website, null: false
      t.string :open_hours, null: false
      t.string :amenities, null: false
      
    end
  end
end

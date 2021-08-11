class AlterBusinesses < ActiveRecord::Migration[5.2]
  def change
    add_column :businesses, :city, :string
    add_column :businesses, :zipCode, :string
    add_column :businesses, :lat, :string
    add_column :businesses, :lng, :string
    add_column :businesses, :price, :string
    remove_column :businesses, :amenities
  end
end

class ChangeBusinesses < ActiveRecord::Migration[5.2]
  def change
    add_column :businesses, :num_rating, :integer
    add_column :businesses, :categories, :string
  end
end

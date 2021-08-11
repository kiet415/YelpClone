class AddIntoBusinesses < ActiveRecord::Migration[5.2]
  def change
    add_column :businesses, :photos, :string
  end
end

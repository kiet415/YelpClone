class AlterBusiness < ActiveRecord::Migration[5.2]
  def change
    remove_column :businesses, :pictures
    add_column :businesses, :pictures, :string, array: true, default: []
    remove_column :businesses, :categories
    add_column :businesses, :categories, :string, array: true, default: []
  end
end

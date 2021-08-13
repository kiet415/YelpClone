class ChangeBusiness < ActiveRecord::Migration[5.2]
  def change
    remove_column :businesses, :open_hours
    add_column :businesses, :open_hours, :string, array: true, default: []
  end
end

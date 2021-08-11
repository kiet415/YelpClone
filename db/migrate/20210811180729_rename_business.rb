class RenameBusiness < ActiveRecord::Migration[5.2]
  def change
    rename_column :businesses, :photos, :pictures
  end
end

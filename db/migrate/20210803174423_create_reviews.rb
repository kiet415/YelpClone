class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :body, null: false
      t.float :rating, null: false
      t.integer :user_id, null: false
      t.integer :business_id, null: false
      t.string :date, null: false

      t.timestamps
    end
  end
end

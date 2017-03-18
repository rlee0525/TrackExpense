class CreateExpenses < ActiveRecord::Migration[5.0]
  def change
    create_table :expenses do |t|
      t.integer :user_id, null: false
      t.datetime :datetime, null: false
      t.float :amount, null: false
      t.string :description, null: false

      t.timestamps
    end
    
    add_index :expenses, :user_id
  end
end

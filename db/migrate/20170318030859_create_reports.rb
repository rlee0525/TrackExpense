class CreateReports < ActiveRecord::Migration[5.0]
  def change
    create_table :reports do |t|
      t.float :amount, presence: true
      t.datetime :start_time, presence: true
      t.datetime :end_time, presence: true
      t.integer :user_id, presence: true

      t.timestamps
    end

    add_index :reports, :user_id
  end
end

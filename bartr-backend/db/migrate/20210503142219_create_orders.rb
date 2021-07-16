class CreateOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.belongs_to :user
      t.boolean :open, default: true, null: false
      t.string :recipient
      t.string :street_address
      t.string :city
      t.string :state
      t.string :zip_code
      t.timestamps
    end
  end
end

class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.belongs_to :product
      t.belongs_to :order

      t.timestamps
    end
  end
end

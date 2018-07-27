class CreateSushis < ActiveRecord::Migration[5.1]
  def change
    create_table :sushis do |t|
      t.string :name
      t.string :img_url
      t.integer :price

      t.timestamps
    end
  end
end

class CreateDrawings < ActiveRecord::Migration[5.0]
  def change
    create_table :drawings do |t|
      t.string :title
      t.text :description
      t.string :location

      t.timestamps
    end
  end
end

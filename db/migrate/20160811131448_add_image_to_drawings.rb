class AddImageToDrawings < ActiveRecord::Migration[5.0]
  def change
    add_column :drawings, :image, :string
  end
end

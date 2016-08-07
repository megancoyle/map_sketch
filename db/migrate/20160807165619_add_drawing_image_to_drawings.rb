class AddDrawingImageToDrawings < ActiveRecord::Migration[5.0]
  def change
    add_column :drawings, :drawing_image, :string
  end
end

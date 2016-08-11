class RemoveDrawingImageFromDrawings < ActiveRecord::Migration[5.0]
  def change
    remove_column :drawings, :drawing_image
  end
end

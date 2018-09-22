class AddShowcaseToDrawings < ActiveRecord::Migration[5.0]
  def change
    add_column :drawings, :showcase, :boolean, default: false
  end
end

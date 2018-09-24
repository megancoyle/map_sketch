class AddReviewedToDrawings < ActiveRecord::Migration[5.0]
  def change
    add_column :drawings, :reviewed, :boolean, default: false
  end
end

class AddUserToDrawings < ActiveRecord::Migration[5.0]
  def change
    add_reference :drawings, :user, foreign_key: true
  end
end

class DropComments < ActiveRecord::Migration[5.0]
  def up
    drop_table :comments
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end

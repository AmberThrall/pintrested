class AddAttachmentImageToPins < ActiveRecord::Migration[6.1]
  def up
    add_attachment :pins, :image
  end

  def down
    remove_attachment :pins, :image
  end
end

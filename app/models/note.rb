class Note < ApplicationRecord
  belongs_to :drawing
  validates :title, presence: true
end

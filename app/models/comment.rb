class Comment < ApplicationRecord
  belongs_to :drawing
  validates :body, presence: true
end

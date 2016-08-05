class Drawing < ApplicationRecord
  has_many :comments, dependent: :destroy
  has_many :notes, dependent: :destroy
  validates :title, presence: true,
                    length: { minimum: 5 }
end

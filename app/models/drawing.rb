class Drawing < ApplicationRecord
  has_many :notes, dependent: :destroy
  has_many :favorites
  has_many :users, through: :favorites, dependent: :destroy
  validates :title, presence: true
  # very cool having your backend make this call
  def get_map_url(address)
    address_url = "https://maps.googleapis.com/maps/api/staticmap?center=#{address}&zoom=15&size=600x320&maptype=roadmap&key=#{ENV['google_api_key']}"
  end

end

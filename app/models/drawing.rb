class Drawing < ApplicationRecord
  has_many :notes, dependent: :destroy
  validates :title, presence: true,
                    length: { minimum: 5 }
  mount_uploader :drawing_image, DrawingImageUploader

  def get_map_url(address)
    address_url = "https://maps.googleapis.com/maps/api/staticmap?center=#{address}&zoom=15&size=600x300&maptype=roadmap&key=#{ENV['google_api_key']}"
  end

end

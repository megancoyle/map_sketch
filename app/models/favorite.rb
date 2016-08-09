class Favorite < ActiveRecord::Base
  belongs_to :drawing
  belongs_to :user
end

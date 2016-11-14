class FavoritesController < ApplicationController
  before_action :authenticate_user!

  def index
    drawings = Drawing.all
    @user_favorites = []
    favorites = current_user.favorites
    favorites.each do |favorite|
      index = favorite.drawing_id
      drawing = Drawing.find(index)
      @user_favorites.push(drawing)
    end

  end
end

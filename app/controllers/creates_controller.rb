class CreatesController < ApplicationController
  before_action :authenticate_user!

  def index
    drawings = Drawing.all
    @user_created = []
    drawings.each do |drawing|
      index = drawing.user_id
      if index == current_user.id
        @user_created.push(drawing)
      end
    end

  end
end

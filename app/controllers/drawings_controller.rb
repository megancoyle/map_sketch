class DrawingsController < ApplicationController
  def new
  end

  def create
    render plain: params[:drawing].inspect
  end
end

class DrawingsController < ApplicationController
  def new
  end

  def create
    @drawing = Drawing.new(drawing_params)

    @drawing.save
    redirect_to @drawing
  end

  private
    def drawing_params
      params.require(:drawing).permit(:title, :description, :location)
    end

end

class DrawingsController < ApplicationController
  def index
    @drawings = Drawing.all
  end

  def show
    @drawing = Drawing.find(params[:id])
  end

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

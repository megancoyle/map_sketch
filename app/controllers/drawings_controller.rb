class DrawingsController < ApplicationController
  def index
    @drawings = Drawing.all
  end

  def show
    @drawing = Drawing.find(params[:id])
  end

  def new
    @drawing = Drawing.new
  end

  def create
    @drawing = Drawing.new(drawing_params)

    if @drawing.save
      redirect_to @drawing
    else
      render 'new'
    end
  end

  private
    def drawing_params
      params.require(:drawing).permit(:title, :description, :location)
    end

end

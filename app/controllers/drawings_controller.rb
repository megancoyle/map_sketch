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

  def edit
    @drawing = Drawing.find(params[:id])
  end

  def create
    @drawing = Drawing.new(drawing_params)

    if @drawing.save
      redirect_to @drawing
    else
      render 'new'
    end
  end

  def update
    @drawing = Drawing.find(params[:id])

    if @drawing.update(drawing_params)
      redirect_to @drawing
    else
      render 'edit'
    end
  end

  private
    def drawing_params
      params.require(:drawing).permit(:title, :description, :location)
    end

end

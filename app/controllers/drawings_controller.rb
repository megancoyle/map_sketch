class DrawingsController < ApplicationController
  # before_action :authenticate_user!
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
      redirect_to @drawing, notice: "New drawing was created."
    else
      render 'new'
    end
  end

  def update
    @drawing = Drawing.find(params[:id])

    if @drawing.update(drawing_params)
      redirect_to @drawing, notice: "The drawing has been updated."
    else
      render 'edit'
    end
  end

  def destroy
    @drawing = Drawing.find(params[:id])
    @drawing.destroy

    redirect_to drawings_path, alert: "Aw, snap. You deleted a drawing."
  end

  private
    def drawing_params
      params.require(:drawing).permit(:title, :description, :location)
    end

end

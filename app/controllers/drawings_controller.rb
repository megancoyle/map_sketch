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
    @address_url = @drawing.get_map_url(params[:address])
  end

  def edit
    @drawing = Drawing.find(params[:id])
  end

  def get_address
    if params[:address]
      @address_url = get_map_url(params[:address])
      puts get_map_url(params[:address]).inspect
    end
  end

  def create
    puts params[:address].inspect
    @address = params[:address]
    @drawing = Drawing.new(drawing_params)
    @drawing.drawing_image = params[:drawing_image]

    if @drawing.save
      @drawing.drawing_image.url # => '/url/to/file.png'
      @drawing.drawing_image.current_path # => 'path/to/file.png'
      @drawing.drawing_image_identifier # => 'file.png'
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
      params.require(:drawing).permit(:title, :description, :location, :drawing_image)
    end

end

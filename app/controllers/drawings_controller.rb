class DrawingsController < ApplicationController
  before_action :authenticate_user!, :except => [:index, :show, :get_address, :new]
  before_filter :authorize_admin, only: :admin_view
  before_filter :authorize_admin, only: :notification_view

  def index
    @drawings = if params[:sort] == 'created_at'
      Drawing.all.order(:created_at).reverse
    elsif params[:sort] == 'title'
      Drawing.all.order(:title)
    else
      Drawing.all.order(:title)
    end
  end

  def admin_view
    @drawings = if params[:sort] == 'created_at'
      Drawing.all.order(:created_at).reverse
    elsif params[:sort] == 'title'
      Drawing.all.order(:title)
    else
      Drawing.all.order(:title)
    end
  end

  def notification_view
    @drawings = if params[:sort] == 'created_at'
      Drawing.all.order(:created_at).reverse
    elsif params[:sort] == 'title'
      Drawing.all.order(:title)
    else
      Drawing.all.order(:title)
    end
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
    @drawing.user_id = @current_user.id if current_user

    if @drawing.save
      redirect_to @drawing, notice: "Awesomeness. A new drawing was created."
    else
      render 'new'
    end
  end

  def update
    @drawing = Drawing.find(params[:id])

    if @drawing.update(drawing_params)
      redirect_to @drawing, notice: "Aw, yeah. The drawing has been updated."
    else
      render 'edit'
    end
  end

  def destroy
    @drawing = Drawing.find(params[:id])
    @drawing.destroy

    redirect_to drawings_path, alert: "Aw, snap. You deleted a drawing."
  end

  # add favorite
  def add_favorite
    @drawing = Drawing.find(params[:id])
    @drawing.favorites.create(user: current_user)
    redirect_to drawing_path(@drawing)
  end

  # remove favorite
  def remove_favorite
    @drawing = Drawing.find(params[:id])
    @drawing.favorites.where(user: current_user).destroy_all
    redirect_to drawing_path(@drawing)
  end

  private
    def drawing_params
      params.require(:drawing).permit(:title, :showcase, :reviewed, :description, :location, :image, :user)
    end

end

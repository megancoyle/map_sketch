class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  rescue_from ActiveRecord::RecordNotFound, with: :couldnt_find_record

  def authorize_admin
    redirect_to(root_path) unless current_user.admin
    #redirects to previous page
  end

  private
  def couldnt_find_record
    redirect_to root_url, notice: "That record doesn't exist!"
  end

end

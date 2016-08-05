class CommentsController < ApplicationController
  def create
    @drawing = Drawing.find(params[:drawing_id])
    @comment = @drawing.comments.create(comment_params)
    redirect_to drawing_path(@drawing)
  end

  def destroy
    @drawing = Drawing.find(params[:drawing_id])
    @comment = @drawing.comments.find(params[:id])
    @comment.destroy
    redirect_to drawing_path(@drawing), alert: "The comment has been deleted."
  end

  private
    def comment_params
      params.require(:comment).permit(:commenter, :body)
    end
end

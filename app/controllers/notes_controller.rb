class NotesController < ApplicationController
  before_action :authenticate_user!, :except => [:show]

  def show
    @note = Note.find(params[:id])
  end

  def new
    @drawing = Drawing.find(params[:drawing_id])
    @note = @drawing.notes.new
  end

  def edit
    @drawing = Drawing.find(params[:drawing_id])
    @note = Note.find(params[:id])
  end

  def create
    @drawing = Drawing.find(params[:drawing_id])
    @note = @drawing.notes.create(note_params)

    if @note.save
      redirect_to drawing_path(@drawing), notice: "Yays! You added a new note."
    else
      render 'new'
    end
  end

  def update
    @drawing = Drawing.find(params[:drawing_id])
    @note = Note.find(params[:id])

    if @note.update(note_params)
      redirect_to drawing_note_path(@drawing, @note), notice: "Nice work updating that note."
    else
      render 'edit'
    end
  end

  def destroy
    @note = Note.find(params[:id])
    @note.destroy
    redirect_to drawing_path(@note.drawing), alert: "Oh nos, you deleted a note!"
  end

  private
    def note_params
      params.require(:note).permit(:title, :body)
    end

end

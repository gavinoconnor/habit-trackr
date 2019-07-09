class Api::UserHabitsController < ApplicationController
  def create
    user_habits = UserHabit.create(user_id: params[:user_id], habit_id: params[:habit_id])
    render json: user_habits
  end

end

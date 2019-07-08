class Api::UsersController < ApplicationController


  def index
    users = User.all
    render json: users
  end

  def show
    user = User.first
    render json: user
  end

  def create
    user = User.new(user_params)

    if user.save
      render json: user
    end
  end

  private

  def user_params
    params.permit(
      :first_name,
      :last_name,
      :username,
      :email
    )
  end

end

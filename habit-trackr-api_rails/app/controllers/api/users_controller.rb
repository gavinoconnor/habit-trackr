class Api::UsersController < ApplicationController

  def index
    users = User.all
    render json: users
  end

  def show
    user = User.find(params[:id])
    render json: user
  end

  def create
    user = User.new(user_params)

    if user.save
     token = encode_token(user.id)
     render json: {user: UserSerializer.new(user), token: token}
    else
     render json: {errors: user.errors.full_messages}
   end
  end

  private

  def user_params
    params.permit(
      :first_name,
      :last_name,
      :username,
      :email,
      :password
    )
  end

end

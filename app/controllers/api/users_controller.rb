class Api::UsersController < ApplicationController
    def new
        @user = User.new
        render :new
    end

    def create 
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render 'api/users/show'
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    # def index

    # end

    # def show
    #     @user = User.find(params[:id])
    #     render json: 'api/users/show'
    # end

    def user_params
        params.require(:user).permit(:email, :first_name, :last_name, :password)
    end
end

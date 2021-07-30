class SessionController < ApplicationController
    def new
        render :new
    end

    def create
        @user = User.find_by_credentials(params[:user][:email],params[:user][:password])
        if @user
            login!(@user)
            redirect_to user_url(@user)
        else
            render json: ['Invalid email or password'], status 401
            
        end
    end

    def destroy
        if !@current_user
            render json: ["Not logged in"], status 404
        else
            logout!
            redirect_to new_session_url
        end
    end
end

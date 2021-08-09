class Api::ReviewsController < ApplicationController
    before_action :require_logged_in, only: [:create, :destroy]

    def index 
        @reviews = Review.where(business_id: params[:business_id])
        render :index
    end

    def create 
        @review = current_user.reviews.new(review_params)

        if @review.save
            render :show
        else
            render json: @review, status: :unprocessable_entity
        end
    end

    def review_params
        params.require(:review).permit(:body, :rating, :user)
    end

    def destroy 

    end
end

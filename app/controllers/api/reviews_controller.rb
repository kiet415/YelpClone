class Api::ReviewsController < ApplicationController
    before_action :require_logged_in

    def index 
        @reviews = Review.all
    end
    def show
        @review = Review.find(params[:id])
    end

    def create 
        @review = current_user.reviews.new(reviews).new(review_params)

        if @review.save
            render :show
        else
            render json: @review, status: :unprocessable_entity
        end
    end

    def review_params
        params.require(:review).permit(:body, :rating, :business_id)
    end
end

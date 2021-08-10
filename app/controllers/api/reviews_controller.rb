class Api::ReviewsController < ApplicationController
    before_action :require_logged_in, only: [:create, :destroy]

    def index 
        @reviews = Review.where(business_id: params[:business_id])
        render :index
    end

    def create 
        @review = current_user.reviews.new(review_params)
        #@review.user_id = current_user.id
        if @review.save
            render :show
        else
            render json: @review, status: :unprocessable_entity
        end
    end
    def update 
        @review = Review.find(params[:id])
        if @review.update(review_params)
            render :show
        else
            render json: @review.errors.full_messages, status:404
        end
    end
    def review_params
        params.require(:review).permit(:body, :rating, :user_id, :business_id, :date, :first_name, :last_name)
    end

    def destroy 
        @review = Review.find(params[:id])
        @review.destroy
    end
end

class Api::BusinessesController < ApplicationController
    before_action :require_logged_in, only: [:create]

    def index 
        @businesses = bounds ? Business.in_bounds(bounds).includes(:reviews) : Business.all.includes(:reviews)
        #@businesses = Business.all
        render "api/businesses/index"
    end

    def show
        @business = Business.find(params[:id])
        render "api/businesses/show"
    end

    def bounds
        params[:bounds]
    end
    def business_params 
        params.require(:business).permit(:lat, :lng, :price, :categories, :photo)
    end
end
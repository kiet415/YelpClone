class Api::BusinessesController < ApplicationController
    before_action :require_logged_in, only: [:create]

    def index 
        @businesses = bounds ? Business.in_bounds(bounds) : Business.all
        render "api/businesses/index"
    end

    def show
        @business = Business.find(params[:id])
        render "api/businesses/show"
    end
end
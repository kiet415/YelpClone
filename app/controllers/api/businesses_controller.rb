class Api::BusinessesController < ApplicationController
    before_action :require_logged_in, only: [:create]

    def index 
        @businesses = Business.all
    end

    def show
        @business = Business.find(params[:id])
    end
end
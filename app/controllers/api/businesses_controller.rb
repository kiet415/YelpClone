class Api::BusinessesController < ApplicationController
    before_action :require_logged_in, only: [:create, :update]

    def index 
        #@businesses = bounds ? Business.in_bounds(bounds).includes(:reviews) : Business.all.includes(:reviews)
        @businesses = Business.all
        #default to san francisco as location if none
        city = "San Francisco"
        
        if params[:filters]
            if params[:filters][:location]
                city = params[:filters][:location]
        
                @businesses = Business
                            .where("city ILIKE ?", city)

            end
        else 
            @businesses = Business.all
        end
        
        
        render "api/businesses/index"
        
    end
    
    def show
        @business = Business.find(params[:id])
        render "api/businesses/show"
    end

    def bounds
        params[:bounds]
    end

    def update
        @business = Business.find(params[:id])
        
        @business.photos.attach(params[:business][:photos])
        
        
       
        render "api/businesses/show"
    end
    
    def business_params 
        params.require(:business).permit(:lat, :lng, photos: [])
    end
end
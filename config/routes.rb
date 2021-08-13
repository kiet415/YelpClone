Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create ]
    resource :session, only: [:create, :destroy, :show]
    resources :businesses, only: [:index, :show, :update] do 
      resources :reviews, only: [:create, :update, :show, :index, :destroy]
    end 
    
  end
  

  
  root to: "static_pages#root"
end

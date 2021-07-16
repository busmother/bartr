Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :products
      resources :users do
        resources :orders do
            resources :items
        end
      end
    end
  end

end
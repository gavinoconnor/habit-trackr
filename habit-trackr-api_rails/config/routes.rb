Rails.application.routes.draw do
  namespace :api do
    resources :users
    resources :habits
    resources :userhabits
  end
end

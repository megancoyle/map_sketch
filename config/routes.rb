Rails.application.routes.draw do
  devise_for :users
  resources :drawings do
    resources :comments
  end
  root 'welcome#index'
end

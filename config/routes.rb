Rails.application.routes.draw do
  devise_for :users
  resources :drawings do
    resources :comments
    resources :notes
  end
  root 'welcome#index'
end

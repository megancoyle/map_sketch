Rails.application.routes.draw do
  devise_for :users
  get 'drawings/get_address' => 'drawings#get_address'
  resources :drawings do
    resources :comments
    resources :notes
  end
  root 'welcome#index'
end

Rails.application.routes.draw do
  devise_for :users
  get 'drawings/get_address' => 'drawings#get_address'
  resources :drawings do
    resources :notes
    member do
      post 'add_favorite'
      delete 'remove_favorite'
    end
  end
  get 'favorites' => 'favorites#index' 
  root 'welcome#index'
end

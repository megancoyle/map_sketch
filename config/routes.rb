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
  get 'creates' => 'creates#index'
  get 'admin' => 'drawings#admin_view'
  get 'notifications' => 'drawings#notification_view'
  get '/pages/:page' => 'pages#show'
  root 'welcome#index'
end

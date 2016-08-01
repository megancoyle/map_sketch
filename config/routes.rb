Rails.application.routes.draw do
  resources :drawings do
    resources :comments
  end
  root 'welcome#index'
end

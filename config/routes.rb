Rails.application.routes.draw do
  resources :drawings
  root 'welcome#index'
end

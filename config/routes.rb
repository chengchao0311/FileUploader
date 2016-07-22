Rails.application.routes.draw do
  get 'pages/home'

  get 'pages/demo'

  get 'pages/qrcode'

  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

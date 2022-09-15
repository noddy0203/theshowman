import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AppProvider } from './context'
import './index.css'
import { Auth0Provider } from "@auth0/auth0-react"
ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain='noddy0203.us.auth0.com'
    clientId='RNMmKFSc4AyDo0sL58uMTqzwJqwXHash'
    redirectUri={window.location.origin}>
    <AppProvider>
      <App />
    </AppProvider>
  </Auth0Provider>


)

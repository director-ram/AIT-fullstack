// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { CartProvider } from './context/CartContext.jsx'
import { Provider } from 'react-redux'
import Store from './Redux/Store.jsx'
// import App1 from './App1.jsx'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element was not found')
}

createRoot(rootElement).render(
<Provider store={Store}>
    <BrowserRouter>
    <CartProvider>
      <App />
      {/* <App1 /> */}
    </CartProvider>
  </BrowserRouter>
</Provider>
)

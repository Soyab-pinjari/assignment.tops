import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './Redux/Store.js'
import { CategoryProvider } from './context/CategoryContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   

    <BrowserRouter> 

      <Provider store={store}>
    <CategoryProvider>

           <App />
   
    </CategoryProvider>

      </Provider>
  
  
    </BrowserRouter>
   
  </StrictMode>,
)

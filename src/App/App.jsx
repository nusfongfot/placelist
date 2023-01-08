import RestaurantCard from '../components/RestaurantCard'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import { AppContextProvider } from '../context/AppContext'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'

function App() {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <Router />
      </AppContextProvider>
    </BrowserRouter>
  )
}

export default App

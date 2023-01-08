import { Route, Routes } from 'react-router-dom'
import DetailsPage from '../pages/DetailsPage'
import Home from '../pages/Home'

function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/details/:cardId" element={<DetailsPage />} />
    </Routes>
  )
}
export default Router
import Categories from './Categories'
import SearchForm from './SearchForm'
import Typography from '@mui/material/Typography'
import './style.css'

function Header() {
  return (
    <div className='container-fluid d-flex flex-column flex-md-row justify-content-around overflow-hidden position-sticky top-0 header'>
      <div className='row'>
        <div className='col-12 col-lg-3 d-flex align-items-center flex-md-row'>
          <Typography
            variant='h5'
            className='text-place'
          >
            Place List
          </Typography>
        </div>

        <div className='col-12 col-lg-9 d-flex flex-column flex-md-row'>
          <Categories />
          <SearchForm />
        </div>
      </div>
    </div>
  )
}
export default Header

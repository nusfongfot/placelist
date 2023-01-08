import Categories from './Categories'
import SearchForm from './SearchForm'
import Typography from '@mui/material/Typography'
import './style.css'

function Header() {
  return (
    <div className='container overflow-hidden position-sticky top-0 header'>
       <div className="row">
        <div className="col-lg-6 col-12 d-flex flex-md-row align-items-center justify-content-start">
           <Typography
             variant='h5'
             className='text-place'
           >
             Place List
           </Typography>
        </div>
        <div className="col-lg-6 col-12 d-flex flex-column flex-md-row align-items-center justify-content-end">
          <Categories />
          <SearchForm />
        </div>
       </div>
    </div>
  )
}
export default Header

import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import './style.css'

function BackButton() {
  return (
    <div>
      <Link href="/">
        <Button
          className='back-btn'
          variant='contained'
          sx={{
            marginTop: '20px',
            marginLeft: '100px',
            borderRadius: '30px',
            background: '#134B8A',
          }}
        >
          Back
        </Button>
      </Link>
    </div>
  )
}
export default BackButton

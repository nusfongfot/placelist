import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { useState } from 'react'
import { useAppContext } from '../context/AppContext'
import './style.css'

export default function SearchForm() {
  const [search, setSearch] = useState('')
  const { data, setData } = useAppContext()

  const handleSubmit  = (e) => { 
    e.preventDefault()
    const searchData = data.filter((item) => item.name.includes(search))
    setData(searchData)
    setSearch('')
   }

  return (
    <Box
      component='form'
      sx={{
        '& > :not(style)': { m: 1, width: '580px' },
      }}
      noValidate
      autoComplete='off'
      onSubmit={handleSubmit}
      onChange={(e) => setSearch(e.target.value)}
      className='searchInput'
    >
      <TextField
        id='outlined-basic'
        label='Search name'
        variant='outlined'
        type='search'
        value={search}
      />
    </Box>
  )
}

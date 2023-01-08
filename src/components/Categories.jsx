import * as React from 'react'
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { useAppContext } from '../context/AppContext'
import './style.css'

export default function Categories() {
  const [value, setValue] = React.useState('')
  const { handleOnchangeOptions } = useAppContext()

  const handleValue = (e) => {
    setValue(e)
    handleOnchangeOptions(e)
  }
  return (
    <FormControl
      sx={{ m: 1, minWidth: 120 }}
      className='select'
    >
      <InputLabel id='demo-simple-select-label'>Restaurant</InputLabel>
      <Select
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        value={value}
        label='Restaurant'
        onChange={(e) => handleValue(e.target.value)}
      >
        <MenuItem value={'all'}>All</MenuItem>
        <MenuItem value={'restaurant'}>Restaurant</MenuItem>
        <MenuItem value={'cafe'}>Cafe</MenuItem>
        <MenuItem value={'bakery'}>Bakery</MenuItem>
      </Select>
    </FormControl>
  )
}

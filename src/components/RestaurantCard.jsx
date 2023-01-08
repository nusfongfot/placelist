import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import Brightness1Icon from '@mui/icons-material/Brightness1'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import { useAppContext } from '../context/AppContext'
import AddPagination from './AddPagination'
import './style.css'

export default function RestaurantCard() {
  const { data, handleClickById } = useAppContext()

  const getCurrentDay = (item) => {
    const currentDayIndex = new Date().getDay()    
    const currentDataDayIndex = currentDayIndex === 0 ? 6 : currentDayIndex - 1
    const unitTime =
      item.operation_time[currentDataDayIndex].time_open === 'closed' &&
      item.operation_time[currentDataDayIndex].time_close === 'closed'
        ? ''
        : 'AM'
    const display = `${item.operation_time[currentDataDayIndex].time_open} ${unitTime} - ${item.operation_time[currentDataDayIndex].time_close} ${unitTime}`
    return display
  }
  return (
    <div>
      <div className='d-flex flex-wrap align-items-center justify-content-center gap-4 m-2'>
        {data.map((item) => {
          return (
            <Card
              sx={{ display: 'flex', width: '20%', flexDirection: 'column' }}
              key={item.id}
              className='card-item'
            >
              <Link
                href={`/details/${item.id}`}
                // href='#'
                sx={{ textDecoration: 'none', color: 'black' }}
              >
                <CardHeader
                  title={item.name}                  
                  subheader={getCurrentDay(item)}
                  onClick={() => handleClickById(item.id)}
                  avatar={
                    <img
                      src={item.images[0]}
                      style={{ width: '60px', height: '60px', borderRadius: '10px' }}
                      alt={item.name}
                    />
                  }
                  action={
                    <span style={{ color: 'blue' }}>
                      <Brightness1Icon sx={{ width: '11px', height: '11px', marginRight: '5px' }} />
                      {item.rating}
                    </span>
                  }
                />
              </Link>

              <Box sx={{ display: 'flex', width: '126px', height: '120px' }}>
                {item.images.map((item, i) => {
                  return (
                    <CardMedia
                      component='img'
                      image={item}
                      alt='Paella dish'
                      key={i}
                    />
                  )
                })}
              </Box>
            </Card>
          )
        })}
      </div>
      {/* <AddPagination  /> */}
    </div>
  )
}

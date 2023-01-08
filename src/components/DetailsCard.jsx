import { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import Brightness1Icon from '@mui/icons-material/Brightness1'
import './style.css'

function DetailsCard({ dataDetails }) {
  const [active, setActive] = useState('1')
  const [button, setButton] = useState('1')
  const handleClick = (e) => {
    setActive(e.target.value)
    setButton(e.target.value)
  }
  useEffect(() => {
    if (dataDetails) {
      console.log(dataDetails)
    }
  }, [dataDetails])
  return (
    <div className='container-fluid d-flex justify-content-center mt-lg-5 overflow-hidden'>
      <div className='row bg-infomation'>
        <div className='d-flex flex-column align-items-center justify-content-center mt-5 mb-3 d-md-none'>
          <div className='d-flex'>
            <button
              value='1'
              onClick={handleClick}
              className={button === '1' ? 'active' : null}
              id='btn-info'
            >
              Information
            </button>
            <button
              value='2'
              onClick={handleClick}
              className={button === '2' ? 'active' : null}
              id='btn-info'
            >
              Image
            </button>
          </div>
        </div>

        <div
          className={
            active === '1'
              ? 'col-md-6 d-md-flex flex-column mt-lg-4 d-flex'
              : 'd-none col-md-6 d-md-flex flex-column mt-lg-4 d-flex'
          }
        >
          <Card
            style={{ width: '500px', height: '700px' }}
            className='w-100 card-info'
          >
            <Card.Img
              variant='top'
              src={dataDetails?.profile_image_url}
              className='img-card'
              style={{ objectFit: 'cover', height: '380px' }}
            />
            <Card.Body>
              <div className='d-flex justify-content-between'>
                <Card.Title className='fs-2'>{dataDetails?.name}</Card.Title>
                <Card.Title style={{ color: 'blue' }}>
                  <Brightness1Icon sx={{ width: '11px', height: '11px', marginRight: '5px' }} />
                  {dataDetails?.rating}
                </Card.Title>
              </div>
              <Card.Text className='d-flex flex-column d-md-flex flex-md-row'>
                <div className='col-md-3'>
                  <b>Address:</b>
                </div>
                <div className='col-md-9 mx-2'>
                  <p>{dataDetails?.address}</p>
                </div>
              </Card.Text>
              <Card.Text className='d-flex flex-column d-md-flex flex-md-row'>
                <div className='d-flex col-5 col-md-3'>
                  <b>Opening Hour:</b>
                </div>
                <div className='d-flex flex-column col-10 col-md-9 mx-2 mt-2 mt-md-0'>
                  {dataDetails?.operation_time?.map((item, i) => {
                    return (
                      <div
                        className='d-flex gap-2'
                        key={i}
                      >
                        <p className='m-0'>{item.day}:</p>
                        <p className='m-0'>{`${item.time_open} AM - ${item.time_close} AM`}</p>
                      </div>
                    )
                  })}
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div
          className={
            active === '2'
              ? 'col-md-6 d-md-flex flex-column mb-3 mt-lg-4'
              : 'd-none col-md-6 d-md-flex flex-column mt-lg-4'
          }
        >
          <div className='bg-white d-flex flex-column align-items-center rounded '>
            <h3 className='align-self-start mx-lg-5'>Images</h3>
            {dataDetails?.images?.map((item, i) => {
              return (
                <div
                  className='d-flex flex-column'
                  key={i}
                >
                  <img
                    src={item}
                    alt='img'
                    className='img-show mb-lg-3'
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
export default DetailsCard

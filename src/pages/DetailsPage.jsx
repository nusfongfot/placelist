import DetailsCard from '../components/DetailsCard'
import Navbar from '../components/Navbar'
import { useAppContext } from '../context/AppContext'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import SideBar from '../components/SideBar'
import BackButton from '../components/BackButton'

function DetailsPage() {
  const { cardId } = useParams()
  const { data } = useAppContext()
  const [dataDetails, setDataDetails] = useState(null)


  const filterCard = () => {
    const filter = data.find((item) => {
      return item.id.toString() == cardId.toString()
    })
    setDataDetails(filter)
  }

  useEffect(() => {
    if (data) {
      filterCard()
    }
  }, [data])
  return (
    <div className='container-fluid p-0 overflow-hidden'>
      <Navbar />
      <div className='row'>
        <div className='col-1'>
          <SideBar />
          <BackButton />
        </div>
        <div className='col-11 mt-lg-5'>
          <DetailsCard dataDetails={dataDetails} />
        </div>
      </div>
    </div>
  )
}
export default DetailsPage

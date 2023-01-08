import { useState, useContext, createContext, useEffect } from 'react'
import dataJson from '../data/example_data.json'
import service from '../services'

const AppContext = createContext()
const pageSize = 9

const useAppContext = () => useContext(AppContext)

const AppContextProvider = ({ children }) => {
  const [data, setData] = useState([])
  const [cardById, setCardById] = useState([])
  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: pageSize,
  })
  const handlePageChange = (e, page) => {
    const from = (page - 1) * pageSize
    const to = (page - 1) * pageSize + pageSize
    setPagination({ ...pagination, from: from, to: to })
  }

  const handleOnchangeOptions = (e, page) => {
    if (e === 'all') {
      setData(dataJson)
      return
    }
    const filter = dataJson.filter((item) => item.categories.includes(e))
    setData(filter)
  }

  const handleClickById = (id) => {
    const filter = data.filter((item) => item.id == id)
    setCardById(filter)
  }
  
  // useEffect(() => {
  //   service.getData({ from: pagination.from, to: pagination.to }).then((res) => {
  //     setPagination({ ...pagination, count: res.count })
  //     setData(res.data)
  //   })
  // }, [pageSize.from, pagination.to])

  useEffect(() => {
   setData(dataJson)
  }, [])

  const shared = {
    data,
    handleOnchangeOptions,
    setData,
    handleClickById,
    cardById,
    pagination,
    handlePageChange,
    pageSize
  }
  return <AppContext.Provider value={shared}>{children}</AppContext.Provider>
}

export { useAppContext, AppContextProvider }

import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import { useAppContext } from '../context/AppContext'

function AddPagination() {
  const { pagination, handlePageChange, pageSize } = useAppContext()
  return (
    <Stack style={{ display: 'flex', alignItems: 'center', marginBottom: '65px', marginTop: '65px' }}>
      <Pagination
        variant='outlined'
        count={Math.ceil(pagination.count / pageSize)}
        onChange={handlePageChange}
      />
    </Stack>
  )
}
export default AddPagination

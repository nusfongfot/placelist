import './style.css'

function SideBar() {
  return (
    <div className='side-bar d-none d-lg-block'>
      <div className='d-flex flex-column align-items-center justify-content-center position-relative'>
        <img
          className='logo-img position-absolute'
          src='https://png.pngtree.com/png-vector/20200921/ourlarge/pngtree-red-and-black-logo-png-image_2348180.jpg'
          alt='logo'
        />
        <hr className='position-absolute vector1' />
        <img
          src='https://e7.pngegg.com/pngimages/562/723/png-clipart-gavoille-opticiens-rue-de-la-place-logo-brand-others-angle-text.png'
          alt='place'
          className='position-absolute img-location'
        />
        <span className='position-absolute title'>Place</span>
        <hr className='position-absolute vector2' />
      </div>
    </div>
  )
}
export default SideBar

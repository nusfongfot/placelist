import Header from "../components/Header"
import Navbar from "../components/Navbar"
import RestaurantCard from "../components/RestaurantCard"
import SideBar from "../components/SideBar"

function Home() {
  return (
    <div>
        <Navbar />
        <SideBar />
        <Header />
        <RestaurantCard />
    </div>
  )
}
export default Home
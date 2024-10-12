import Navbar from '../components/Navbar'
import NewUsers from '../components/NewUsers'
import CourseBlog from '../components/CourseBlog'
import Events from '../components/Events'
import Trail from '../components/Trail'
import OnlineUser from '../components/OnlineUser'
import Main from '../components/Main'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <div className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-4 bg-gray-200 gap-4">
          <div className='m-4'>
            <NewUsers />
          </div>
          <div className='m-4'>
            <CourseBlog />
          </div>
          <div className='m-4'>
            <Events />
          </div>
          <div className="col-span-1 space-y-6 m-4">
            <Trail />
            <OnlineUser />
          </div>
      </div>
    </div>
  )
}

export default Home
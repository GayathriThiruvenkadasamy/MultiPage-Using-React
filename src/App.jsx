
import NavigationBar from './components/NavigationBar'
import { useLocation, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import ListOfUser from './pages/ListOfUser'
import UserDetail from './pages/UserDetail'

function App() {

  const location = useLocation();
  const hidenav = location.pathname.startsWith("/user/");

  return (
    <div>
      { !hidenav && <NavigationBar />}
      <Routes>
        <Route path='/' element ={<Home />}/>
        <Route path='/about' element = {<About />}/>
        <Route path='/listOfUser' element={<ListOfUser />}/>
        <Route path='/user/:id' element={<UserDetail />}/>
        
      </Routes>
    </div>
  )
}

export default App
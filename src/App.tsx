import {Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <nav style={{display: 'flex', gap:'10px'}}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      {/* <FormWithFormik/> */}
      {/* <FormHandle/> */}
      {/* <Basicform/> */}
      {/* <UserMap/> */}
      {/* <ToggleMessage/> */}
      {/* <ConditionalRendering isLoggedIn = {isLoggedIn}/> */}
      {/* <Timer/> */}
      {/* <input type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)}/> */}
    </>
  )
}
export default App;
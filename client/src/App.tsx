import { BrowserRouter , Routes , Route } from 'react-router-dom'
import './App.css'
import Landing from './Pages/landing'
import Room from './Pages/Room'
import Viewable from './Pages/Viewable'

function App() {

  return (
    <>
    <BrowserRouter>
     <Routes>
       <Route path="/" element={<Landing/>}/>
       <Route path="/room/:roomId" element={<Room/>}/>
       <Route path="/room/shared/:roomId" element={<Viewable/>}/>


     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

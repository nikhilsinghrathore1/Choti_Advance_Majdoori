import { BrowserRouter , Routes , Route } from 'react-router-dom'
import './App.css'
import Landing from './Pages/landing'

function App() {

  return (
    <>
    <BrowserRouter>
     <Routes>
       <Route path="/" element={<Landing/>}>

       </Route>

     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

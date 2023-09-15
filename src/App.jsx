import './App.css'
import About from './component/About/About'
import Header from './component/Header/Header'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
const App = ()=>{
  // const myName = 'sheraz'
  return(
<BrowserRouter>
<Routes>
  <Route path='/header' element={<Header />} />
  <Route path = '/about' element={<About />} />
</Routes>
</BrowserRouter>

  )
}

export default App
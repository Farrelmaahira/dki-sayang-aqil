import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Post from './pages/Post'
import Input from './pages/Input'
import Edit from './pages/Edit'

function App() {
  return(
  <Router>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/post' element={<Post />} />
      <Route path='/input' element={<Input />}/>
      <Route path='/edit/:id' element={<Edit />}/>
    </Routes>
  </Router>
  )
}

export default App

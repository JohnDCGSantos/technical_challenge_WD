import './App.css'
import { Route, Routes } from 'react-router-dom'

import PhoneList from './components/PhoneList'
import PhoneDetail from './components/PhoneDetail'
function App() {
  return (
    <Routes>
      <Route path='/' element={<PhoneList />} />
      <Route path='/phones/:id' element={<PhoneDetail />} />
    </Routes>
  )
}

export default App

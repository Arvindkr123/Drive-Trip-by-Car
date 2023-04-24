import React from 'react'
import Create from './components/Create'
import { Route, Routes } from 'react-router'
import Read from './components/Read'
import Edit from './components/Edit'

const App = () => {
  return (
    <div className='container'>
      <Routes>
        <Route path='/' exact element={<Read />} />
        <Route path='/create' exact element={<Create />} />
        <Route path='/edit' exact element={<Edit />} />
      </Routes>
    </div>
  )
}

export default App

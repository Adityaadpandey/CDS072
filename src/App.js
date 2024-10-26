import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Endsolver from './End_solver';
import Enduser from './End_user';
import Manageuser from './Manage_user';
import Navbar from './Navbar';

const App = () => {
  return (
    <>
        <Navbar/>
      <Routes>
        <Route index element={<Home/>} />
        <Route path='/end-solver' element={<Endsolver/>} />
        <Route path='/enduser' element={<Enduser/>} />
        <Route path='/manager' element={<Manageuser/>} />
    </Routes>
    </>
  )
}

export default App
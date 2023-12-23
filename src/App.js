import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style.css';
import Login from './Components/Login';
import Profile from './Components/Profile';

const App = () => {


  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
      </Routes>
    </Router>
    // <div>
    //   <Login/>
    //   <Profile/>
    // </div>
  );
}

export default App;

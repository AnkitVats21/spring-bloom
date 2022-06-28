import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import SignUp from './routes/auth/SignUp';
import SignIn from './routes/auth/SignIn';
import Home from './routes/home/Home';


function App() {
  return (
    <BrowserRouter >

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" exact element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;

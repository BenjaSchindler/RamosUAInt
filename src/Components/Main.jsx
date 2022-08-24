import React from 'react';
import { Routes ,Route } from 'react-router-dom';
import App from '../App';
import Home from '../Pages/Home';

const Main = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={App}></Route>
      <Route path="Home" element={<Home />} />
    </Routes>
  );
}

export default Main;
import { useState } from 'react'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import UserLayout from './components/Layout/UserLayout';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<UserLayout />}>
      {/* User Layout */}
      </Route>
      <Route>{/* Admin Layout */}</Route>
    </Routes>
    </BrowserRouter>
  );
};
export default App;
